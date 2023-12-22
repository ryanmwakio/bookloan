<script setup>
import AdminNavComponent from "@/components/AdminNavComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useBookStore } from "@/stores/book";
import { useToast } from "vue-toast-notification";

const bookStore = useBookStore();
const $toast = useToast();

const books = ref([]);
const pendingApprovalBooks = ref([]);
const approvedBooks = ref([]);

const approveBtnText = ref("Approve Loan");
const rejectBtnText = ref("Reject Request");
const terminateBtnText = ref("Terminate Loan");

onMounted(async () => {
  await bookStore.getAllBooks();
  books.value = await bookStore.getBooks;

  if (books.value) {
    for (let i = 0; i < books.value.length; i++) {
      console.log(i, books.value[i].loan);
      if (!books.value[i].loan) {
        continue;
      } else {
        if (books.value[i].loan.status === "pending") {
          pendingApprovalBooks.value.push(books.value[i]);
          console.log(pendingApprovalBooks.value);
        }

        if (books.value[i].loan.status === "approved") {
          approvedBooks.value.push(books.value[i]);
        }
      }
    }
  }
});

const handleApprove = async (bookLoanId) => {
  try {
    approveBtnText.value = "Approving...";
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "/bookloans/" + bookLoanId + "/approve",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    if (response.data.success) {
      approveBtnText.value = "Approved";

      approvedBooks.value.push(
        pendingApprovalBooks.value.find((book) => book.loan.id === bookLoanId)
      );

      pendingApprovalBooks.value = pendingApprovalBooks.value.filter(
        (book) => book.loan.id !== bookLoanId
      );

      $toast.success(response.data.message);
    }
  } catch (error) {
    console.log(error);
    $toast.error(error.response.data.message);
  } finally {
    approveBtnText.value = "Approve Loan";
  }
};

const handleReject = async (bookLoanId) => {
  try {
    rejectBtnText.value = "Rejecting...";
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "/bookloans/" + bookLoanId + "/reject",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    if (response.data.success) {
      $toast.success(response.data.message);
      pendingApprovalBooks.value = pendingApprovalBooks.value.filter(
        (book) => book.loan.id !== bookLoanId
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    rejectBtnText.value = "Reject Request";
  }
};

const handleTerminate = async (bookLoanId) => {
  try {
    terminateBtnText.value = "Terminating...";
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "/bookloans/" + bookLoanId + "/terminate",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    if (response.data.success) {
      $toast.success(response.data.message);
      approvedBooks.value = approvedBooks.value.filter((book) => book.loan.id !== bookLoanId);
    }
  } catch (error) {
    console.log(error);
  } finally {
    terminateBtnText.value = "Terminate Loan";
  }
};

// const info = [
//   {
//     id: 1,
//     title: "The Story of Success",
//     author: "Ceridwen Dovey",
//     img: img1,
//     is_available: true
//   },
//   {
//     id: 2,
//     title: "Blue is a darkness weakened by light",
//     author: " Sarah Mc",
//     img: img2,
//     is_available: false
//   },
//   {
//     id: 3,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img3,
//     is_available: true
//   },
//   {
//     id: 4,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img4,
//     is_available: true
//   },
//   {
//     id: 5,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img5,
//     is_available: true
//   },
//   {
//     id: 6,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img6,
//     is_available: true
//   },
//   {
//     id: 7,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img7,
//     is_available: true
//   },
//   {
//     id: 7,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img8,
//     is_available: true
//   },
//   {
//     id: 7,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img9,
//     is_available: true
//   },
//   {
//     id: 7,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img10,
//     is_available: true
//   },
//   {
//     id: 7,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img11,
//     is_available: true
//   },
//   {
//     id: 7,
//     title: "The Story of Success",
//     author: "John Doe",
//     img: img12,
//     is_available: true
//   }
// ];
</script>

<template>
  <main class="flex gap-4">
    <AdminNavComponent />
    <div class="p-4">
      <div v-if="pendingApprovalBooks.length > 0">
        <h2 class="font-semibold text-base">Unapproved/Pending Book Loans</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-1 bg-primary-green mx-auto w-full container py-2"
        >
          <div v-for="item in pendingApprovalBooks" :key="item.id">
            <card-component :info="item" />
            <div class="flex gap-2 mx-2">
              <div class="flex flex-col gap-2">
                <span
                  @click="handleApprove(item.loan.id)"
                  class="bg-primary-orange text-white py-2 px-6 text-xs w-fit h-fit cursor-pointer"
                  >{{ approveBtnText }}</span
                >
                <span
                  @click="handleReject(item.loan.id)"
                  class="bg-primary-orange text-white py-2 px-6 text-xs w-fit h-fit cursor-pointer"
                  >{{ rejectBtnText }}</span
                >
              </div>
              <div class="bg-white py-2 px-6 text-xs">
                <p>
                  <span class="font-semibold">Loan Requested By:</span>
                  {{ item.loan.loaned_to.name }}, {{ item.loan.loaned_to.email }}
                </p>
                <p><span class="font-semibold">Request Date:</span> {{ item.loan.loan_date }}</p>
                <p><span class="font-semibold">Due Date:</span> {{ item.loan.due_date }}</p>
                <p><span class="font-semibold">Status:</span> {{ item.loan.status }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4" v-if="approvedBooks.length > 0">
        <h2 class="font-semibold text-base">Approved Book Loans</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-1 bg-yellow-300 mx-auto w-full container py-2"
        >
          <div v-for="item in approvedBooks" :key="item.id">
            <card-component :info="item" />
            <div class="flex gap-2 mx-8">
              <span
                @click="handleTerminate(item.loan.id)"
                class="bg-primary-orange text-white py-2 px-6 text-xs cursor-pointer"
                >{{ terminateBtnText }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
