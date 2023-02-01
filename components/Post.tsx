import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/outline"
import Avatar from "./Avatar"


type Props = {
    post: Post
};

export default function Post({ post }: Props) {
  return (
  <div className="rounded-md flex cursor-pointer border border-gray-300
  bg-white shadow-sm hover:border-gray-600">
    {/*Votes*/}
    <div className="flex flex-col items-center justify-start space-y-1
    rounded-l-md bg-gray-50 p-4 text-gray-400">
      <ArrowUpIcon className="voteButtons hover:text-red-400"/>
      <p className="text-black text-xs font-bold">0</p>
      <ArrowDownIcon className="voteButtons hover:text-blue-400"/>
    </div>

    <div className="p-3 pb-1">
      {/* Header */}
      <div>
        <Avatar  seed={post.subreddit[0]?.topic}  />
        <p>
          <span>r/{post.subreddit[0]?.topic}</span>
        </p>
      </div>   
      {/* Body */}

      {/* Image */}

      {/* Footer */}
    </div>
  </div>
  )
}

 