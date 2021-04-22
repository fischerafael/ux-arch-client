import { API_URL } from '../url'

class Post {
    async find() {
        const data = await fetch(`${API_URL}/posts`)
        const posts = await data.json()
        return posts
    }

    async findOne(slug: string) {
        const data = await fetch(`${API_URL}/posts?slug=${slug}`)
        const post = await data.json()
        return post
    }
}

export const post = new Post()

export type IPost = {
    id: string
    title: string
    slug: string
    abstract?: string
    short_description: string
    introduction?: string
    goal?: string
    method?: string
    results?: string
    conclusion?: string
}
