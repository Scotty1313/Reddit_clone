import { useQuery } from "@apollo/client"
import { GET_ALL_POSTS } from "../graphql/queries"

export default function Feed() {
    const { data, error } = useQuery(GET_ALL_POSTS)

    const posts: Post[] = data?.getPostList;

    return (
        <div>Feede goes here</div>
    )
}