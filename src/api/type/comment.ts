import { Id } from "./common"

export type CommentResponse = {
    id: Id,
    author: Id,
    text: string,
    reply: Comment[],
    created: string,
    likes: number,
    post: Id
}