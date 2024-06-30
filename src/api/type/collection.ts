import { Id, Image } from "./common"

export type RecipeCollectionResponse = {
    id: Id,
    name: string,
    recipes: Id[]
    image?: Image
}