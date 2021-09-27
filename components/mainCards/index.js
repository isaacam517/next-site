import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import {
  Container, Row, Col, Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';

export default function MainCards() {
    return (
        <>
            <article className='text-center'>
               <Container>
                   <Row className="d-flex justify-content-center">
                       <Col xs={9} md={6} lg={4} className="mb-4">
                           <Card>
                                <Image
                                    src="/neilton.png" // Route of the image file
                                    height={250} // Desired size with correct aspect ratio
                                    width={100} // Desired size with correct aspect ratio
                                    alt="Logo"
                                />
                                <CardBody>
                                <CardTitle className="text-dark" tag="h5">Todo Salário com PITÚ</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-danger">Ele gastou R$ 3.682,00 (três mil seiscentos e oitenta e dois reais)</CardSubtitle>
                                <CardText className="text-secondary">Testemunhas afirmam que ele saiu do banco direto pra fábrica da PITÚ .</CardText>
                                <div className="gap-2 d-grid">
                                    <Link href='/noticias/pitu' >
                                        <a className="btn btn-primary btn-lg" type="button">Ler mais</a>
                                    </Link>
                                </div>
                                </CardBody>
                            </Card>
                       </Col>
                       {/* <Col xs={9} md={6} lg={4} className="mb-4">
                           <Card>
                                <CardImg top 
                                    height={220}
                                    width="100%" 
                                    src="/assets/paulo-roberto.png" alt="Foto do Prefeito Paulo Roberto" />
                                <CardBody>
                                <CardTitle className="text-dark" tag="h5">Lei de incentivo financeiro para servidores da Secretaria da Saúde</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-danger">As metas serão elaboradas pela Secretaria.</CardSubtitle>
                                <CardText className="text-secondary">Incentivar financeiramente o bom desempenho de servidores.</CardText>
                                <div className="gap-2 d-grid">
                                    <Link href='/noticias/secretaria-de-saude' >
                                        <a className="btn btn-primary btn-lg" type="button">Ler mais</a>
                                    </Link>
                                </div>
                                </CardBody>
                            </Card>
                       </Col> */}
                   </Row>
               </Container>
            </article>
        </>
    )
}