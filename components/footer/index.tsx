import Head from 'next/head'
import styles from './footer.module.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'reactstrap';

import Navigation from "../../components/navigation";

export default function Footer() {
    return (
        <>
            <Head>
                <title>Notícias da Cidade :: Vitória de Santo Antão.</title>
                <meta property="og:title" content="Notícias da Cidade :: Vitória de Santo Antão." />
                <meta name="description" content="Fique por dentro das notícias e informações da maior cidade da zona da mata central pernambucana"></meta>
            </Head>
            <footer className={styles.footerComponent}>
                <p className="text">© Copyright 2021 Desenvolvido com <span><FontAwesomeIcon icon={faHeart} /></span> por <strong>IAM</strong></p>
            </footer>
        </>
    )
}