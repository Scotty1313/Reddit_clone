import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Reddit clone by Scott Macdonald</title>
        <meta name="description" content="Reddit clone by Scott Macdonald" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div>
          <h1></h1>
        </div>
      </main>

      <Header />
    </>
  )
}
