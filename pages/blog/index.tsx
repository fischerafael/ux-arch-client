import { GetStaticProps } from 'next'

import { post } from '../../src/services/url/posts'
import { IPost } from '../../src/services/url/posts/protocol'

import { Blog } from '../../src/UI/Pages/Blog'

const blog = ({ posts }: { posts: IPost[] }) => {
    return <Blog posts={posts} />
}

export default blog

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = await post.find()

    return {
        props: {
            posts: posts
        }
    }
}
