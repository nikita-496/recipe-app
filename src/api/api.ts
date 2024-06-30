import axios, { AxiosInstance } from "axios";
import { Id, QueryParams } from "./type/common";

export class Api {
    private readonly clients: AxiosInstance
    private readonly endpoint: string

    constructor(clients: AxiosInstance , endpoint: string) {
        this.clients = clients
        this.endpoint = endpoint
    }
    
    async get <ResponseType>(id?: Id, queryParams?: QueryParams): Promise<ResponseType[]> {
        let url = this.endpoint
        url = id ? `${url}/${id}`: queryParams ? `${url}${queryParams}`: url

        try {
            const response = await this.clients.get<ResponseType[]>(url)
            return response.data
        } catch (err) {
            if(axios.isAxiosError(err)) {
                console.error(`Error fetching ${this.endpoint}`, err.response.data)
            }
            else if (err instanceof Error) {
                console.error(err.message)
            }
        }
    }

    /*async find <ResponseType>(id: ID): Promise<ResponseType> {
        try {
            const response = await this.clients.get<ResponseType>(`${this.endpoint}/${id}`)
            return response.data
        } catch (err) {
            if(axios.isAxiosError(err)) {
                console.log(`Error fetching ${this.endpoint}`, err.response.data)
            }
            else if (err instanceof Error) {
                console.log(err.message)
            }
        }
    }

    async findBy <ResponseType>(queryParams: QueryParams): Promise<ResponseType[]> {
        
        try {
            const response = await this.clients.get<ResponseType[]>(`${this.endpoint}${queryParams}`)
            return response.data
        } catch (err) {
            if(axios.isAxiosError(err)) {
                console.log(`Error fetching ${this.endpoint}`, err.response.data)
            }
            else if (err instanceof Error) {
                console.log(err.message)
            }
        }
    }*/
}
