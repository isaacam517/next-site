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
        <title>Vitoriando - Vagas & Notícias</title>
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
