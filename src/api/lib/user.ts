/*import axios from "axios"
import { baseApiClients } from "../clients"
import { UserResponse } from "../type/user"
import { Params } from "react-router-dom"
import { EntityApi } from "../type/apiMethods"
import { Id } from "../type/common"

async function getUsers <ResponseType> (): Promise<ResponseType[]> {
    try {
       const response = await baseApiClients.get<ResponseType[]>('/users')
       return response.data
    }
    catch(error) {
        if(axios.isAxiosError(error)) {
            console.log("Error fetching users", error.response.data)
        }
        else if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

async function findUser <ResponseType> (id: Id): Promise<ResponseType> {
    try {
        const response = await baseApiClients.get<ResponseType>(`/users/${id}`)
        return response.data
     }
     catch(error) {
         if(axios.isAxiosError(error)) {
             console.error("Error fetching user: ", error.response.data)
         }
         else if (error instanceof Error) {
             console.error(error.message)
         }
     }
}


export const user: EntityApi = {
    get: getUsers,
    find: findUser 
}
    */