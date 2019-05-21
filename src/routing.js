import axios from "axios";

const instance = axios.create({
    baseURL: "http://coderscave.tech/movilidapp/api/v1/"
});

instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
