import React from 'react';
import Link from 'next/link'

import {
  Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardColumns,
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
                                <CardImg top width="100%" src="/noticias/foto-da-camara.PNG" alt="Foto da câmara Municipal" />
                                <CardBody>
                                <CardTitle className="text-dark" tag="h5">Servidores municipais recebem o auxílio-alimentação</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-danger">R$ 682,00 (seiscentos e oitenta e dois reais)</CardSubtitle>
                                <CardText className="text-secondary">O Prefeito aprovou e sancionou a lei 4.466/2021 que institui o auxílio-alimentação.</CardText>
                                <div class="d-grid gap-2">
                                    <Link href='/noticias/auxilio-alimentacao' >
                                        <Button class="btn btn-primary btn-lg" type="button">Ler mais</Button>
                                    </Link>
                                </div>
                                </CardBody>
                            </Card>
                       </Col>
                        {/* <Col xs={9} md={6} lg={4} className="mb-4">
                           <Card>
                                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                       </Col>
                        <Col xs={9} md={6} lg={4} className="mb-4">
                           <Card>
                                <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle tag="h5">Card title</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                       </Col> */}
                   </Row>
               </Container>
            </article>
        </>
    )
}