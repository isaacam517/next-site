import Image from "next/image";
import Head from "next/head";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import MainCards from "../components/mainCards";

function Home() {
  return (
    <>
      <Head>
        <title>POLYANA'S DOLCI</title>
        {/* <meta property="og:title" content="Alvirrubro gastou todo seu salário com PITÚ " />
        <meta name="description" content=" No mesmo dia que recebeu, torrou com cana!"></meta>
        <meta property="og:image" content="/img/capaLink.jpg" /> */}
        {/* <script data-ad-client="ca-pub-3808193959835271" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      </Head>

      <Navigation />
      <Header />
      <div className="my-2 text-center w-100">
        <Image
          src="/img-principal.png" // Route of the image file
          height={200} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          alt="Logo"
        />
        {/* <iframe
          src="https://www.youtube.com/embed/Ty4isRlrrbg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </div>
      <Carousel />
      <h2 className="text-center display-2">FEITO COM AMOR &#128151;</h2>
      <div className="div-contato text-center">
        <a href="https://wa.me/5581995073317" target="_blank">
          <Image
            src="/imgHistoria/zap.png" // Route of the image file
            height={100} // Desired size with correct aspect ratio
            width={100} // Desired size with correct aspect ratio
            alt="Logo"
          />
        </a>
        <a href="https://www.instagram.com/polyanas_dolci/" target="_blank">
          <Image
            src="/imgHistoria/insta.png" // Route of the image file
            height={90} // Desired size with correct aspect ratio
            width={80} // Desired size with correct aspect ratio
            alt="Logo"
          />
        </a>
      </div>
      <MainCards />

      <div className="mt-3">
        <Footer />
      </div>
    </>
  );
}

export default Home;
