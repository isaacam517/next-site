import Head from 'next/head'
import { Container } from 'reactstrap';
import Footer from '../../components/footer';

import Navigation from "../../components/navigation";

export default function SobreMim() {
    return (
        <>
            <Head>
                <title>Informações do Desenvolvedor :: Vitoriando.</title>
                <meta property="og:title" content="Vitoriando :: Vitória de Santo Antão." />
                <meta name="description" content="Blog de entretenimento, informações, notícias, e lazer."></meta>
            </Head>
            <article className='text-center'>
                <Navigation />
                <Container>
                    <h2 className='my-4'>
                        Sobre Mim - Em Manutenção
                    </h2>
                </Container>
                <Footer/>
            </article>
        </>
    )
}