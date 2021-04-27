import { IPost } from '../../../entities/post'

import { NavBar } from '../../Components/NavBar'
import { PostContent } from './PostContent'

export const BlogPost = ({ postData }: { postData: IPost }) => {
    return (
        <>
            <NavBar />
            <PostContent postData={postData} />
        </>
    )
}
