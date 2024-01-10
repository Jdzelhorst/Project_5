import axios from "axios"

axios.defaults.baseURL = "https://interactopia-api-e9e9ddc66214.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;