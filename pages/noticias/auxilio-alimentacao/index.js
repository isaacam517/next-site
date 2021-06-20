import Head from 'next/head'
import Image from 'next/image'
import {Container} from 'reactstrap';
import Footer from '../../../components/footer';
import Navigation from "../../../components/navigation";

export default function Noticias() {
    return (
        <>
            <Head>
                <title>Vitoriando - Notícias e Informações</title>
                <meta property="og:title" content="Servidores da Câmara Municipal de Vitória-PE recebem R$ 682 de auxílio-alimentação" />
                <meta name="description" content=" Auxílio teve início em março, confira os cargos que tem direito."></meta>
                <meta property="og:image" content="/assets/foto-da-camara.PNG" />
                <script data-ad-client="ca-pub-3808193959835271" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <Navigation />
            <Container>
                <article className='text-center'>
                        <h2 className='display-4'>
                            Servidores da Câmara Municipal de Vitória de Santo Antão recebem o auxílio-alimentação
                        </h2>
                        <Image
                            src="/noticias/foto-da-camara.PNG" // Route of the image file
                            height={300} // Desired size with correct aspect ratio
                            width={420} // Desired size with correct aspect ratio
                            alt="Foto da camara Municipal da cidade"
                        />
                        <div className="my-3 text-center">
                            <p>
                                O Prefeito Paulo Roberto Leite de Arruda, no uso das atribuições que lhes são conferidas por lei,
                                sancionou a lei de Nº 4.466/2021 no dia 19 de março de 2021, na qual fica instituído o auxílio-alimentação,
                                de caráter <strong>idenizatório</strong> em favor dos servidores da Câmara Municipal de Vitória de Santo Antão, 
                                vale salientar que o auxílio-alimentação tornou-se de direito de <strong>alguns cargos</strong>, segue abaixo a lista: 
                            </p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <ul className="list-group w-75">
                                <li className="list-group-item">Chefe de Gabinete, símbolo CCG</li>
                                <li className="list-group-item">Assessor Parlamentar, símbolo CC-1</li>
                                <li className="list-group-item">Secretário Especial para Assuntos Legislativos, símbolo CC-2</li>
                                <li className="list-group-item">Assessor de Gabinete, símbolo CC-3</li>
                                <li className="list-group-item">Assesor Legislativo, símbolo CC-4</li>
                                <li className="list-group-item">Secretário de Gabinete, símbolo CC-5 <a href="https://drive.google.com/file/d/1r_50CSIWEROnJJ-xCA1iPZpRcQg99TmT/view?usp=sharing" className="text-danger"> - Lei nº 4.475</a></li>
                            </ul>
                        </div>
                        <div className="my-3">
                            <p>
                                O valor do auxílio-alimentação é de <strong> R$ 682,00 (seiscentos e oitenta e dois reais);</strong> <br />
                                Embora publicada no dia 19 de março do ano corrente, seus efeitos retroagiram para o dia 1º de março de 2021. 
                            </p>
                            <p>
                                Para ter acesso a lei 4.466/2021 <strong><a className="text-warning" href="https://drive.google.com/file/d/1t2ZcA2mxgH6pjluWAylW7VZRCbsyYMwx/view?usp=sharing">CLIQUE AQUI</a></strong> e visualize em pdf.
                            </p>
                        </div>
                </article>
            </Container>
            <Footer/>
        </>
    )
}