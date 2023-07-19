import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config.js";


let service= axios.create({baseURL: BASE_URL,timeout: TIMEOUT})
export default service