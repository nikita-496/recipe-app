/*import axios from "axios"
import { baseApiClients } from "../clients"
import { CommentResponse } from "../type/comment"
import { Params, QueryString } from "../type/common"
import { EntityApi } from "../type/apiMethods"

async function findCommentsByPost <ResponseType>(queryString: QueryString): Promise<ResponseType[]>  {

    //const queryParams = params.queryParams

    try {
       const response = await baseApiClients.get<ResponseType[]>(`/comments?post=${queryString}`)
       return response.data
    }
    catch(error) {
        if(axios.isAxiosError(error)) {
            console.error("Error fetching comments: ", error.response.data)
        }
        else if (error instanceof Error) {
            console.error(error.message)
        }
    }
}

export const comment: EntityApi = {
    findBy: findCommentsByPost
}
    */