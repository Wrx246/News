import axios from "axios";


const API_URL = 'https://newsapi.org/v2/';

export const API = axios.create({
    baseURL: API_URL,
})