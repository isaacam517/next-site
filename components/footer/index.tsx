import Head from 'next/head'
import styles from './footer.module.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'reactstrap';

import Navigation from "../../components/navigation";

export default function Footer() {
    return (
        <>
            <footer className={styles.footerComponent}>
                <p className="text">© Copyright 2022 Desenvolvido por <strong>IAM </strong>
                <a href="#" title="contador de visita">
                    <img src="https://counter6.stat.ovh/private/webcontadores.php?c=9h79pk7kmn73wpykg6xjak29qagfgdbb" title="contador de visita" alt="contador de visita" /></a>
                </p>

            </footer>
        </>
    )
}

{/* <p className="text">© Copyright 2021 Desenvolvido com <span><FontAwesomeIcon icon={faHeart} /></span> por <strong>IAM </strong> */}
