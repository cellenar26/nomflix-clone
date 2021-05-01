import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key:"17f63f0af9afb30432061e00d90f277a",
        language: "en-US"
    }
});

api.get("tv/popular");

export default api;