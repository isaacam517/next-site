import Head from 'next/head'
import Header from '../components/header'
import Navigation from '../components/navigation'
import Carousel from '../components/carousel'
import Footer from '../components/footer'
import MainCards from '../components/mainCards'

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
        {/* <Carousel/> */}
        <h2 className='text-center display-2' >Ultimas Notícias</h2>
        <MainCards />
      </main>
      <div className='mt-3'> 
        <Footer/>
      </div>
    </>
  )
}

export default Home
