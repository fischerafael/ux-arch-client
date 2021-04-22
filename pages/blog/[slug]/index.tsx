import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { IPost, post } from '../../../src/services/url/posts'

import { BlogPost } from '../../../src/UI/Pages/BlogPost'
import { LoadingPage } from '../../../src/UI/Pages/LoadingPage'

const index = ({ postData }: { postData: IPost }) => {
    const router = useRouter()
    if (router.isFallback) return <LoadingPage />

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
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params.slug
    const postData = await post.findOne(slug as string)

    if (!postData[0]) {
        return {
            redirect: {
                destination: '/blog',
                permanent: false
            }
        }
    }

    return {
        props: {
            postData: postData[0]
        }
    }
}
