import { api } from '../../config'

class Post {
    async find() {
        const { data } = await api.get('/posts')
        return data
    }

    async findBySlug(slug: string) {
        const { data } = await api.get(`/posts?slug=${slug}`)
        return data
    }
}

export const postService = new Post()
