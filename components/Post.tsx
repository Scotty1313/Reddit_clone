import { useSession } from "next-auth/react"
import { useQuery, useMutation } from "@apollo/client"
import { useState } from "react"
import TimeAgo from 'timeago-react'
import Avatar from "./Avatar"
import Link from 'next/link'
import toast from 'react-hot-toast'
import { NewtonsCradle } from '@uiball/loaders'
import { GET_ALL_VOTES_BY_POST_ID } from "../graphql/queries"
import { ADD_VOTE } from "../graphql/mutations"

import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/outline"
import { useEffect } from "react"




type Props = {
    post: Post
}

export default function Post({ post }: Props) {
  const { vote, setVote } = useState<boolean>()
  const { data: session } = useSession()

  const { data, loading} = useQuery(GET_ALL_VOTES_BY_POST_ID, {
    variables: {
      postId: post?.id
  }
  })

  const [addVote] = useMutation(ADD_VOTE, {
    refetchQueries: [ GET_ALL_VOTES_BY_POST_ID, 'getVotesByPostId']
  })

  const upVote = async (isUpvote: boolean) => {
    if (!session) {
      toast.error('You must be logged in to vote!')
      return
    }
    if (vote && isUpvote) return
    if (vote === false && isUpvote) return

    console.log('Upvoting!', isUpvote)

    await addVote({
      variables: {
        postId: post?.id,
        username: session?.user?.name,
        upvote: isUpvote
      }
    })
  }
  
  useEffect(() => {
    const votes: Vote[] = data?.getVotesByPostId 

    const vote = votes?.find(vote => vote.username === session?.user?.name
      )?.upvote

      setVote(vote)
  } , [data])
  
  if (!post) 
    return (
      <div className="flex w-full items-center justify-center p-18 text-xl">
        <NewtonsCradle size={500} color="#ff4501" />
      </div>
    )

  return (
  <Link href={`/post/${post.id}`}>
    <div className="rounded-md flex cursor-pointer border border-gray-300
    bg-white shadow-sm hover:border hover:border-gray-600">
      {/*Votes*/}
      <div className="flex flex-col items-center justify-start space-y-1
        rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpIcon 
          onClick={() => upVote(true)}
          className={`voteButtons hover:text-red-400 
            ${vote && 'text-red-400'
          }`} 
        />
        <p className="text-black text-xs font-bold">0</p>
        <ArrowDownIcon 
          onClick={() => upVote(false)}
          className={`voteButtons hover:text-blue-400
            ${vote === false && 'text-blue-400'
          }`}
        />
      </div>

      <div className="p-3 pb-1">
        {/* Header */}
        <div className="flex items-center space-x-2">
          <Avatar seed={post.subreddit[0]?.topic} />
          <p className="text-xs text-gray-400">
            <Link href={`/subreddit/${post.subreddit[0]?.topic}`}>
              <span className="font-bold text-black hover:text-bluee-400 
                hover:underline">
                r/{post.subreddit[0]?.topic}
              </span>
            </Link> 
              • Posted by u/{post.username}
            <TimeAgo datetime={post.created_at} />
          </p>
        </div>   

        {/* Body */}
        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm font-light">{post.body}</p>
        </div>

        {/* Image */}
        <img className="w-full" src={post.image} alt="post_image" />

        {/* Footer */}
        <div className="flex space-x-4 text-gray-400">
          <div className="postButtons">
            <ChatAltIcon className="h-6 w-6" />
            <p className="">{post.comments.length} Comments</p>
          </div>
          <div className="postButtons">
            <GiftIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Give Award</p>
          </div>
          <div className="postButtons">
            <ShareIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Share</p>
          </div>
          <div className="postButtons">
            <BookmarkIcon className="h-6 w-6" />
            <p className="hidden sm:inline">Save</p>
          </div>
          <div className="postButtons">
            <DotsHorizontalIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
  </div>
  </Link>  
  )
} 