import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = "http://95.217.156.101:9008/api/v1";
//axios.defaults.baseURL = "http://localhost:8000/api/v1";

export default axios;
