import { IPost } from '../../../services/url/posts/protocol'
import { NavBar } from '../../Components/NavBar'
import { BlogSection } from './BlogSection'

export const Blog = ({ posts }: { posts: IPost[] }) => {
    return (
        <>
            <NavBar />
            <BlogSection posts={posts} />
        </>
    )
}
