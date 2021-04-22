import { createContext, useContext, useState } from 'react'

import { IPost } from '../../services/url/posts/protocol'

interface Props {
    posts: IPost[]
    setPosts(e: any): void
}

const PostsContext = createContext({} as Props)

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState<IPost[]>([])

    return (
        <PostsContext.Provider
            value={{
                posts,
                setPosts
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}

export const usePosts = (postsData: IPost[]) => {
    const { posts, setPosts } = useContext(PostsContext)
    setPosts(postsData)
    return { posts, setPosts }
}
