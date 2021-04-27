import { api } from '../../config'

class Post {
    async find() {
        const { data } = await api.get('/posts')
        return data
    }
}

export const postService = new Post()
