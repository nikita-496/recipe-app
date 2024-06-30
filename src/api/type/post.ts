import { Id, Image } from "./common";


type PostSource = {
    media: string,
    images: Image[]
}

export type Post = {
    id: Id,
    title: string,
    author: Id,
    created: string,
    description: string,
    src: PostSource,
}