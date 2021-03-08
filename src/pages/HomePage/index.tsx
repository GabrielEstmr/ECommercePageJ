// O que Fazer:
// [OK] - Responsividade;
// [ ] - Hover Buttons;
// [ ] - API SEARCH;
// [ ] - AUtocomplete;

import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { SectionBrands, SectionProducts, SectionSolutions, SectionWeAreJussi, SectionContact, SectionNews } from './styles';


import CardProdutos from '../../components/ProductsCard/index';
import HeaderPage from '../../components/Header/index';
import SolutionCard from '../../components/SolutionCard/index';
import InputUnderLined from '../../components/InputUnderLined/index';
import FooterPage from '../../components/Footer/index';


import CardImgBatedeira from '../../assets/HomePage/CardProduto-batedeira.png';
import CardImgGeladeira from '../../assets/HomePage/CardProduto-geladeira.png';
import CardImgBebida from '../../assets/HomePage/CardProduto-bebida.png';

import LogoBrastemp from '../../assets/HomePage/logo-brastemp.svg';
import LogoCompraCerta from '../../assets/HomePage/logo-compracerta.svg';
import LogoConsul from '../../assets/HomePage/logo-consul.svg';
import LogoTheBar from '../../assets/HomePage/logo-thebar.svg';

import imgP1 from '../../assets/HomePage/card-solution-p1.png';
import imgP2 from '../../assets/HomePage/card-solution-p2.png';
import imgP3 from '../../assets/HomePage/card-solution-p3.png';
import imgP4 from '../../assets/HomePage/card-solution-p4.png';

import SecWeAreJussiBackIng from '../../assets/HomePage/background-section-wearejussi.png';
import JussiImgWeAreJussi from '../../assets/HomePage/image-jussi-wearejussi.png';



const HomePage: React.FC = () => {

    return (
        <>
            <HeaderPage></HeaderPage>

            < SectionProducts >
                <Container fluid="md">
                    <Row>
                        <Col>
                            <div className={'container-title-left'}>
                                <h2>//</h2>
                                <div>
                                    <h1>Criamos lojas que vendem mais.</h1>
                                    <p>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. Precisa criar sua loja ou migrar de plataforma?</p>
                                    <button>Veja nossas soluções</button>
                                </div>
                            </div>
                        </Col>
                        <Col className={'col-modified'}>
                            <div className={'container-title-right'}>

                                <CardProdutos imgPath={CardImgGeladeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'0px'} yPosition={'80px'}></CardProdutos>
                                <CardProdutos imgPath={CardImgBatedeira} textBtn={'Comprar em 12x'} zIndex={'100'} xPosition={'125px'} yPosition={'-50px'}></CardProdutos>
                                <CardProdutos imgPath={CardImgBebida} textBtn={'Adicionar à sacola'} zIndex={'1'} xPosition={'250px'} yPosition={'150px'}></CardProdutos>
                            </div>

                        </Col>
                    </Row>
                </Container>

            </SectionProducts >

            <SectionBrands>
                <Container fluid="md">
                    <Row>
                        <Col>
                            <div>
                                <h5>Nossas principais lojas VTEX</h5>
                                <span>→</span>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={LogoBrastemp}></img>
                                <img src={LogoBrastemp}></img>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img src={LogoBrastemp}></img>
                                <img src={LogoBrastemp}></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </SectionBrands>

            <SectionSolutions>

                <Container fluid="md">
                    <Row>
                        <Col>
                            <div className={'container-title'}>
                                <span>//</span>
                                <h2>Nossas Soluções</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <SolutionCard
                                srcImg={imgP1}
                                nomeProd={'Nome do Produto #1'}
                                descptProd={'Descrição do produto #1'}
                                feature1={'.Feature 1'}
                                feature2={'.Feature 2'}
                                feature3={'.Feature 3'}>
                            </SolutionCard>
                        </Col>
                        <Col>
                            <SolutionCard
                                srcImg={imgP2}
                                nomeProd={'Nome do Produto #2'}
                                descptProd={'Descrição do produto #2'}
                                feature1={'.Feature 1'}
                                feature2={'.Feature 2'}
                                feature3={'.Feature 3'}>
                            </SolutionCard>
                        </Col>
                        <Col>
                            <SolutionCard
                                srcImg={imgP3}
                                nomeProd={'Nome do Produto #3'}
                                descptProd={'Descrição do produto #3'}
                                feature1={'.Feature 1'}
                                feature2={'.Feature 2'}
                                feature3={'.Feature 3'}>
                            </SolutionCard>
                        </Col>

                        <Col>
                            <SolutionCard
                                srcImg={imgP4}
                                nomeProd={'Nome do Produto #4'}
                                descptProd={'Descrição do produto #4'}
                                feature1={'.Feature 1'}
                                feature2={'.Feature 2'}
                                feature3={'.Feature 3'}>
                            </SolutionCard>
                        </Col>
                    </Row>
                </Container>

            </SectionSolutions>

            <SectionWeAreJussi backgroundImg={SecWeAreJussiBackIng}>
                <Container fluid="md">
                    <Row>
                        <Col xs={4}>
                            <div className={'container-infos'}>
                                <h2>Olá, somos<br></br>A Jüssi</h2>
                                <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                                <button>Conheça a Jüssi</button>
                            </div>
                        </Col>
                        <Col>
                            <img src={JussiImgWeAreJussi}></img>
                        </Col>
                    </Row>
                </Container>
            </SectionWeAreJussi>

            <SectionContact>
                <div className={'container-infos'}>
                    <h3>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</h3>
                    <span>Entre em contato</span>
                    <h4>comercial@jussi.com.br</h4>
                </div>
            </SectionContact>

            <SectionNews>
                <div className={'container-infos'}>
                    <div className={'container-title'}>
                        <span>//</span>
                        <h3>receba novidades da nossa área<br></br>de produtos digitais.</h3>
                    </div>
                    <InputUnderLined placeHolder={'Digite seu e-mail'} btnMsg={'Cadastrar'} themeColor={'#03FFA5'}></InputUnderLined>
                </div>
            </SectionNews>

            <FooterPage themeColor={'#000000'}></FooterPage>

        </>
    );
};

export default HomePage;