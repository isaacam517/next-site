import Head from 'next/head'
import Navigation from '../../components/navigation'
import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText } from 'reactstrap';
import FooterComponent from '../../components/footer';
import Image from 'next/image';

const Historia = () => (
  <>
    <Head>
      <title>Bolos Confeitados</title>
      <meta
        property="og:title"
        content="Bolos por Encomenda :: Bolos Confeitados."
      />
      <meta
        name="description"
        content="Melhores bolos, mousses e tortas da região"
      ></meta>
      <script
        data-ad-client="ca-pub-3808193959835271"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
    </Head>

    <article>
      <Navigation />
      <Container>
        <Row className="my-2">
          <Col>
            <Card className="div-card my-4">
              <Image
                src="/imgHistoria/img-1.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-2.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-3.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-4.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-5.webp" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-6.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-7.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
            </Card>
            <h2>BOLOS CONFEITADOS</h2>

            <h5>Bolo sensação ......................... R$65,00</h5>
            <h5>Bolo abacaxí c/ creme belga R$65,00</h5>
            <h5>Bolo mousse de morango ... R$65,00</h5>
            <h5>Bolo mousse de limão .......... R$65,00</h5>
            <h5>Bolo mousse de maracuja ... R$65,00</h5>
            <h5>Bolo morango c creme belga R$65,00</h5>
            <h5>Bolo brigadeiro ...................... R$70,00</h5>
            <h5>Bolo d mousse de chocolate R$70,00</h5>
            <h5>Bolo brigadeiro branco ......... R$70,00</h5>
            <h5>Bolo trufado de chocolate .... R$70,00</h5>
            <h5>Bolo de leite ninho ................. R$75,00</h5>
            <h5>Bolo de leite condensado ..... R$75,00</h5>
            <h5>Bolo d mousse d choc branco R$75,00</h5>
            <h5>Bolo de prestígio ....................... R$75,00</h5>
            <h5>Bolo floresta branca c morango R$75,00</h5>
            <h5>Bolo trufado de limão ................ R$75,00</h5>
            <Card className="div-card my-4">
              <Image
                src="/imgHistoria/img-7.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-6.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-5.webp" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-4.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-3.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-2.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
              <Image
                src="/imgHistoria/img-1.jpg" // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={400} // Desired size with correct aspect ratio
                alt="Logo"
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="div-contato">
        <a href="https://wa.me/5511969567912" target="_blank">
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
      <Row>
        <Col>
          <FooterComponent />
        </Col>
      </Row>
    </article>
  </>
);

export default Historia