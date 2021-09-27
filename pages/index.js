import Image from 'next/image'
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
        {/* <meta property="og:title" content="Alvirrubro gastou todo seu salário com PITÚ " />
        <meta name="description" content=" No mesmo dia que recebeu, torrou com cana!"></meta>
        <meta property="og:image" content="/img/capaLink.jpg" /> */}
        {/* <script data-ad-client="ca-pub-3808193959835271" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      </Head>

        <Navigation/>
        <Header/>
        {/* <div className='my-2 text-center w-100'>
          <iframe src="https://www.youtube.com/embed/Ty4isRlrrbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}
        {/* <Carousel/> */}
        {/* <h2 className='text-center display-2' >Fake News</h2> */}
        <MainCards />
        
      <div className='mt-3'> 
        <Footer/>
      </div>
    </>
  )
}

export default Home
