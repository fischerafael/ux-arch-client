import { API_URL } from '../url'

class Post {
    async find() {
        const data = await fetch(API_URL)
        const posts = await data.json()
        return posts
    }
}

export const post = new Post()
