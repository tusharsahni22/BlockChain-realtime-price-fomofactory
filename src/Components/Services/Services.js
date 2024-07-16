import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fomofactory.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus: (status) => {
        return status >= 200 && status < 300;
    },
});

export const getRealTimeUpdates = async () => {
    return axiosInstance.get("/getrealtimedata");
};