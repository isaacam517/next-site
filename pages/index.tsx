import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getPostList } from '../shared/util'
import Header from '../components/header'
import Navigation from '../components/navigation'
import Carousel from '../components/carousel'
import Footer from '../components/footer'

function Home() {
 
  return (
    <>
      <Head>
        <title>Vitoriando</title>
        <meta property="og:title" content="Vitória de Santo Antão :: Curiosidades e Cia." />
        <meta name="description" content="Curiosidades sobre tudo, notícias, entretenimento, resenhas e absurdos."></meta>
        <meta property="og:image" content="/img/capaLink.jpg" />
      </Head>

      <main>
        <Navigation/>
        <Header/>
        <Carousel/>
      </main>
      <div className='mt-3'> 
        <Footer/>
      </div>
    </>
  )
}

export default Home
