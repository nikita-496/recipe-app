import axios from "axios"

const BASE_API_URL = "/api"

axios.defaults.baseURL = BASE_API_URL


export const baseApiClients = axios.create({})