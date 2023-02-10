import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_POST_BY_POST_ID } from '../../graphql/queries'
import Post from '../../components/Post'

export default function PostPage() {
    const router = useRouter()
    const { data } = useQuery(GET_POST_BY_POST_ID, {
        variables: {
            post_id: router.query.postid
        }
})

    const post: Post = data?.getPostListByPostId

    return (
        <div>
            <Post post={post} />
        </div>
    )
}