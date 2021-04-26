import { GetStaticProps } from 'next'
import { IPost, post } from '../../src/services/url/posts'

import { Blog } from '../../src/UI/Pages/Blog'

const blog = ({ posts }: { posts: IPost[] }) => {
    return <Blog posts={posts} />
}

export default blog

export const getStaticProps: GetStaticProps = async (context) => {
    const posts = await post.find()

    const SECONDS = 60
    const MINUTES = 30
    const HALF_AN_HOUR = SECONDS * MINUTES

    return {
        props: {
            posts
        },
        revalidate: HALF_AN_HOUR
    }
}
