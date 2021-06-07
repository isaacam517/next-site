import Head from 'next/head'
import { Container } from 'reactstrap';
import Footer from '../../components/footer';

import Navigation from "../../components/navigation";

export default function RedesSociais() {
    return (
        <>
            <Head>
                <title>Notícias da Cidade :: Vitória de Santo Antão.</title>
                <meta property="og:title" content="Notícias da Cidade :: Vitória de Santo Antão." />
                <meta name="description" content="Fique por dentro das notícias e informações da maior cidade da zona da mata central pernambucana"></meta>
            </Head>
            <article className='text-center'>
                <Navigation />
                <Container>
                    <h2 className='my-4'>
                        Redes Sociais - Em Manutenção
                    </h2>
                </Container>
                <Footer/>
            </article>
        </>
    )
}