import Head from 'next/head'
import Navigation from '../../components/navigation'

const Alinhador = () => (
    <>
        <Head>
            <title>Alinhador :: Vitoriando</title>
            <meta property="og:title" content="Alinhador :: Vitoriando" />
        </Head>
        <Navigation/>
        <article>
            <h2>Alinhador – Vitória de Santo Antão – PE</h2>
            <p><strong>Atividades:</strong><br></br>
            Para atuar no alinhamento de veículos.</p>
            <p><strong>Requisitos:</strong><br></br>
            Necessário possuir experiência com manutenção de veículos e alinhamento.</p>
            <p><strong>Jornada de Trabalho:</strong><br></br>
            Segunda a Sábado.</p>
            <div className="div-button">
                <a href="https://buscarvagas.com.br/envioCurriculo?id=3417626?utm_source=cmp-divulgavagas" className="button-post">Quero a vaga!</a>
            </div>

        </article>
    </>
)

export default Alinhador