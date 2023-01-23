import type { NextPage } from "next"
import Head from "next/head"
import PostBox from "../components/PostBox"
import Feed from "../components/Feed"


const Home: NextPage = () => {
  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>Reddit clone by Scott Macdonald</title>
        <meta name="description" content="Reddit clone by Scott Macdonald" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PostBox />
      <div className="flex">

      <Feed />
      </div>
    </div>
  )
}

export default Home