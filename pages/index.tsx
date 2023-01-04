import type { NextPage } from "next"
import Head from "next/head"
import PostBox from "../components/PostBox"


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit clone by Scott Macdonald</title>
        <meta name="description" content="Reddit clone by Scott Macdonald" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <PostBox />
      <div>

      </div>
    </div>
  )
}

export default Home