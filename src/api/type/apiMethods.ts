import { Id, QueryParams } from "./common"

type Get = () => Promise<ResponseType[]>
type Find = (id: Id) => Promise<ResponseType>
type FindBy = (queryParams: QueryParams) => Promise<ResponseType[]>
//type Post = () =>  void

export interface ApiMethods {
    get: Get,
    find: Find,
    findBy: FindBy
}