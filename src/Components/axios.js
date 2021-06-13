import axios from 'axios'
import { baseUrl } from "../baseurl";

const instance = axios.create({
    baseURL: baseUrl,

    // what happens here is when we request (/hdjh) this means //https:baseurl/hdjh.thats why we uses baseurl set default

})

export default instance;
