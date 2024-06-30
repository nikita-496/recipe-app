import { Id } from "./common"

export type UserResponse = {
    id: Id,
    name: string,
    avatar: string,
    email: string,
    password: string,
    recipes: Id[],
    blogs: Id[],
    comments: Id[],
    favoriteRecipe: Id[]
}
