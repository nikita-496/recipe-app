/*import axios from "axios"
import { baseApiClients } from "../clients"
import { RecipeResponse } from "../type/recipe"
import { Id, Params, QueryString } from "../type/common"
import { searchForWhiteSpace } from "../../utils/searchForWhiteSpace"
import { transformToCamelCase } from "../../adapter/transformToCamelCase"
import { toCamelCaseKeys } from "../../adapter/toCamelCaseKeys"
import { EntityApi } from "../type/apiMethods"


 async function getRecipes <ResponseType>(): Promise<ResponseType[]>  {
    try {
       const response = await baseApiClients.get<ResponseType[]>('/recipes')
       return response.data
    }
    catch(error) {
        if(axios.isAxiosError(error)) {
            console.error("Error fetching recipes: ", error.response.data)
        }
        else if (error instanceof Error) {
            console.error(error.message)
        }
    }
}

 async function findRecipe <ResponseType>(id: Id): Promise<ResponseType>  {
    try {
        const response = await baseApiClients.get<ResponseType>(`/recipes/${id}`)
        return  response.data
     }
     catch(error) {
         if(axios.isAxiosError(error)) {
             console.error("Error fetching recipes: ", error.response.data)
         }
         else if (error instanceof Error) {
             console.error(error.message)
         }
     }
}

 async function findRecipeById <ResponseType> (queryString: QueryString): Promise<ResponseType[]> {

    let str = queryString

    if(typeof queryString === 'object') {
        str =  queryString.join(',')
     }

    try {
       const response = await baseApiClients.get<ResponseType[]>(`/recipes?id=${queryString}`)
       return response.data
    }
    catch(error) {
        if(axios.isAxiosError(error)) {
            console.error("Error fetching recipes: ", error.response.data)
        }
        else if (error instanceof Error) {
            console.error(error.message)
        }
    }
}

export const recipe: EntityApi = {
    get: getRecipes,
    find: findRecipe,
    findBy: findRecipeById
}
    */