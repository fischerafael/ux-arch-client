import { GetStaticProps } from 'next'

import { IPost } from '../../src/entities/post'
import { postService } from '../../src/usecases/services/post'

import { Blog } from '../../src/UI/Pages/Blog'

const blog = ({ posts }: { posts: IPost[] }) => {
    return <Blog posts={posts} />
}

export default blog

export const getStaticProps: GetStaticProps = async () => {
    const posts = await postService.find()

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
