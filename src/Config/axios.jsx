import axios from "axios";

const axiosClient = axios.create( {
    baseURL: "https://deliveryspace.somee.com/api",
});

export default axiosClient;