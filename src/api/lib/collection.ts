/*
import axios from "axios"
import { baseApiClients } from "../clients"
import {  QueryString } from "../type/common"
import { EntityApi } from "../type/apiMethods"

async function getRecipeCollectionByName <ResponseType> (queryString: QueryString): Promise<ResponseType[]> {

    let string = queryString 

    if(typeof queryString === 'object') {
        string =  queryString.join(',')
    }

    try {
       const response = await baseApiClients.get<ResponseType[]>(`/collections?name=${string}`)
       return response.data
    }
    catch(error) {
        if(axios.isAxiosError(error)) {
            console.error("Error fetching recipe collection: ", error.response.data)
        }
        else if (error instanceof Error) {
            console.error(error.message)
        }
    }
}

export const collection: EntityApi = {
    findBy: getRecipeCollectionByName
}
    */