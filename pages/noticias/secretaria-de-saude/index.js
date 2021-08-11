import Head from 'next/head'
import Image from 'next/image'
import {Container} from 'reactstrap';
import Footer from '../../../components/footer';
import Navigation from "../../../components/navigation";

export default function IncentivoNaSaude() {
    return (
        <>
            <Head>
                <title>Vitoriando - Notícias e Informações</title>
                <meta property="og:title" content="Foi sancionada Lei de incentivo financeiro a servidores da Secretaria da Saúde" />
                <meta name="description" content="As metas serão elaboradas pela Secretaria da Saúde em portaria específica."></meta>
                <meta property="og:image" content="/assets/paulo-roberto.png" />
                <script data-ad-client="ca-pub-3808193959835271" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <Navigation />
            <Container>
                {/* <article className='text-center'>
                    <h2 className='display-4'>
                        Incentivo financeiro para servidores da Secretaria de Saúde 
                    </h2>
                    <Image
                        src="/assets/paulo-roberto.png" // Route of the image file
                        height={300} // Desired size with correct aspect ratio
                        width={420} // Desired size with correct aspect ratio
                        alt="Foto do Prefeito Paulo Roberto"
                    />
                    <div className="my-3 text-center">
                        <p>
                            No dia 20 de maio de 2021, O Prefeito Paulo Roberto sancionou a <a href="https://drive.google.com/file/d/1KMst24ek09a2G-96aB4ltXfasdT30AzI/view?usp=sharing" className="text-warning">LEI MUNICIPAL Nº 4.484/2021</a>, ficando assim instituído o incentivo financeiro por desempenho aos servidores da 
                            Secretaria Municipal da Saúde.
                        </p>
                        <h6 className="text-info">Fica o Secretário Municipal de Saúde autorizado a expedir as Portarias, Resoluções e Normativos que estabelecerão as metas, indicadores e definirão valores dos incentivos a serem rateados e pagos para os profissionais de saúde (Art. 14)</h6>
                        <p>
                            O incentivo financeiro por desempenho é aquele que venha a ser tranferido mensalmente, fundo a fundo, pelo <strong>Ministério da Saúde</strong> ao Município de Vitória de Santo Antão. O incentivo financeiro por desempenho 
                            possui os seguintes objetivos:
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <ul className="list-group w-75">
                            <li className="list-group-item">
                                <strong>I</strong> - Estimular a participação dos servidores da Secretaria da Saúde no processo contínuo e progressivo
                                de melhoria dos padrões e indicadores de acesso e de qualidade dos serviços de saúde, o processo de rabalho e os resultados indicadores estabelecidos pelo ministério da Saúde;
                            </li>
                            <li className="list-group-item">
                                <strong>II</strong> - Institucionalizar a avaliação e o monitoramento de indicadores nos serviços para subsidiar a definição de prioridades e programação de ações para melhoria da qualidade dos serviços de saúde; 
                            </li>
                            <li className="list-group-item">
                                <strong>III</strong> - Incentivar financeiramente o bom desempenho de servidores e equipes estimulando-os na busca dos melhores resultados para a qualidade de vida da população;
                            </li>
                            <li className="list-group-item">
                                <strong>IV</strong> - Garantir tranparência e efetividade das ações governamentais direcionadas a atenção à saúde, permintindo-se o contínuo acompanhamento de suas ações e resultados pela sociedade.
                            </li>
                        </ul>
                    </div>
                    <div className="my-3">
                        <p>
                            Para apuração das metas alcançadas pelos SERVIDORES serão utilizados dados de produção registrados nos sistemas de informação das Unidades de Saúde e relatórios de produção. 
                        </p>
                        <p>
                            Esta lei entrou em vigor a partir de sua publicação no dia 20 de maio de 2021, Para ter acesso a lei 4.484/2021 <strong><a className="text-warning" href="https://drive.google.com/file/d/1KMst24ek09a2G-96aB4ltXfasdT30AzI/view?usp=sharing">CLIQUE AQUI</a></strong> e visualize em pdf.
                        </p>
                    </div>
                </article> */}
            </Container>
            <Footer/>
        </>
    )
}