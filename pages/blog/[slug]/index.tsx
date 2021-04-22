import { GetStaticPaths, GetStaticProps } from 'next'
import { IPost, post } from '../../../src/services/url/posts'

import { BlogPost } from '../../../src/UI/Pages/BlogPost'

const index = ({ postData }: { postData: IPost }) => {
    return (
        <>
            <BlogPost postData={postData} />
        </>
    )
}

export default index

export const getStaticPaths: GetStaticPaths = async (context) => {
    const posts = await post.find()
    const paths = posts.map((post) => {
        return {
            params: {
                slug: post.slug
            }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params.slug
    const postData = await post.findOne(slug as string)

    return {
        props: {
            postData: postData[0]
        }
    }
}
