<script setup>
import { defineProps, ref, onMounted } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import RangeComponent from "@/components/RangeComponent.vue";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useToast } from "vue-toast-notification";

const authStore = useAuthStore();

const $toast = useToast();

const props = defineProps(["info"]);
const btnText = ref("Get Book");
const dueDate = ref("");
const extendBtnText = ref("Extend");

const handleLoanBook = async (bookId) => {
  try {
    // if (btnText.value !== "Get Book") {
    if (props.info.loan) {
      if (
        props.info.loan.status === "approved" &&
        authStore.user.id === props.info.loan.loaned_to.id
      ) {
        if (confirm("Are you sure you want to return this book?")) {
          const token = localStorage.getItem("token");

          if (!token) {
            throw new Error("No token found");
          }

          const response = await axios.post(
            "/bookloans/" + props.info.loan.id + "/return",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
          if (response.data.success) {
            btnText.value = "Get Book";
            props.info.loan = null;
            dueDate.value = "";
            $toast.success("Book returned successfully");
          }
          return;
        }
      }
    }

    if (props.info.loan && props.info.loan.status !== "returned") {
      $toast.info("Already loaned");
      return;
    }

    if (!dueDate.value) {
      $toast.info("Please set due date");
      return;
    }
    const token = localStorage.getItem("token");

    if (!token) {
      $toast.info("Please login first");
      return;
    }

    btnText.value = "Loading...";
    const response = await axios.post(
      "/bookloans/" + bookId + "/books",
      {
        due_date: dueDate.value
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.data.success) {
      $toast.success("Book loaned successfully");
      btnText.value = "Pending";
      return;
    }
  } catch (err) {
    console.log(err);
    $toast.error("Something went wrong");
    btnText.value = "Get Book";
  }
};

const user = ref({});

const days = ref(0);
const handleExtendDays = async (days) => {
  try {
    extendBtnText.value = "Loading...";
    const token = localStorage.getItem("token");

    if (!token) {
      $toast.info("Please login first");
      return;
    }

    const response = await axios.post(
      "/bookloans/" + props.info.loan.id + "/extend/" + days,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.data.success) {
      $toast.success(response.data.message);
    }
  } catch (err) {
    console.log(err);
  } finally {
    extendBtnText.value = "Extend";
  }
};

onMounted(async () => {
  user.value = await authStore.getUser();
});
</script>

<template>
  <div class="py-3 px-2">
    <div class="grid grid-cols-2 hover:shadow-lg transition-all duration-300">
      <div class="bg-white p-4">
        <div
          :style="{ backgroundImage: 'url(' + props.info.image + ')' }"
          class="w-full h-64 md:h-72 bg-center bg-cover bg-no-repeat"
        ></div>
      </div>
      <div class="flex flex-col justify-between bg-white p-4">
        <div>
          <span class="text-muted text-xs"
            ><span class="italic text-xs">By</span> {{ props.info.publisher }}</span
          >
          <h5 class="my-2 font-semibold text-sm w-full">{{ props.info.name }}</h5>
          <p class="text-xs text-gray-400">
            Added by:
            <span class="text-primary-orange font-semibold">{{ props.info.added_by.name }}</span>
          </p>
        </div>

        <div>
          <div
            class="flex flex-col my-4"
            v-if="props.info.loan && props.info.loan.status !== 'returned'"
          >
            <div
              class="bg-white px-4 py-2 border my-4"
              v-if="props.info.loan.loaned_to.id === authStore.user.id"
            >
              <label for="" class="text-xs">Extend Loan</label>
              <input
                type="number"
                class="w-full border border-gray-300 rounded py-2 px-4 text-xs focus:outline-none"
                placeholder="Enter number of days"
                v-model="days"
              />
              <button
                class="text-xs text-white bg-primary-orange py-1 px-6 my-2"
                @click="handleExtendDays(days)"
              >
                Extend
              </button>
            </div>
            <h4 class="text-xs mb-2">
              Loan Days Remaining
              <span class="italic"
                >{{ props.info.remaining_days }}/{{ props.info.total_days }}</span
              >
            </h4>
            <range-component :percentage="props.info.percentage_progress" />
          </div>
          <div class="relative" v-if="!props.info.loan || props.info.loan.status === 'returned'">
            <div class="py-2 px-4 border my-2">
              <span class="text-xs">Select Due Date</span>
              <input
                type="date"
                class="w-full border border-gray-300 rounded p-2 text-xs focus:outline-none cursor-pointer"
                v-model="dueDate"
              />
            </div>
          </div>

          <button-component
            :text="
              props.info.loan
                ? props.info.loan.status === 'approved' &&
                  authStore.user.id === props.info.loan.loaned_to.id
                  ? 'return'
                  : props.info.loan.status === 'returned'
                    ? 'Get Book'
                    : props.info.loan.status
                : btnText
            "
            @click="handleLoanBook(props.info.id)"
            :showIcon="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
