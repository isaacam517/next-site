import Head from 'next/head'
import MainCards from '../../components/mainCards';
import Footer from '../../components/footer';

import Navigation from "../../components/navigation";

export default function Noticias() {
    return (
        <>
            <Head>
                <title>Notícias da Cidade :: Vitória de Santo Antão.</title>
                <meta property="og:title" content="Notícias da Cidade :: Vitória de Santo Antão." />
                <meta name="description" content="Fique por dentro das notícias e informações da maior cidade da zona da mata central pernambucana"></meta>
            </Head>
            <article className='text-center'>
                <Navigation />
                    <h2 className='display-2'>
                        Notícias
                    </h2>
                    <MainCards />

            </article>
            <Footer/>
        </>
    )
}