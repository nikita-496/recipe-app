export type Id = number | string
export type QueryParams = string
//export type QueryParamValue = string | string[]
export type Params = {
    id?: Id | Id[]
    queryParams?: QueryParams
}
export type Image = string
