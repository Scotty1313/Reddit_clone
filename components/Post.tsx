import TimeAgo from 'timeago-react'
import Avatar from "./Avatar"

import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/outline"



type Props = {
    post: Post
}

export default function Post({ post }: Props) {
  return (
  <div className="rounded-md flex cursor-pointer border border-gray-300
  bg-white shadow-sm hover:border hover:border-gray-600">
    {/*Votes*/}
    <div className="flex flex-col items-center justify-start space-y-1
    rounded-l-md bg-gray-50 p-4 text-gray-400">
      <ArrowUpIcon className="voteButtons hover:text-red-400"/>
      <p className="text-black text-xs font-bold">0</p>
      <ArrowDownIcon className="voteButtons hover:text-blue-400"/>
    </div>

    <div className="p-3 pb-1">
      {/* Header */}
      <div className="flex items-center space-x-2">
      <Avatar seed={post.subreddit[0]?.topic}  />
        <p className="text-xs text-gray-400">
          <span className="font-bold text-black hover:text-bluee-400 
          hover:underline">
            r/{post.subreddit[0]?.topic}
            </span>
             • Posted by u/{post.username}
          <TimeAgo datetime={post.created_at} />
        </p>
      </div>   

      {/* Body */}
      <div className="py-4">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="mt-2 text-xs font-light">{post.body}</p>
      </div>

      {/* Image */}

      {/* Footer */}
    </div>
  </div>
  )
}

 