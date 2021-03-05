import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Grid from '@material-ui/core/Grid';

import { SectionBrands, SectionProducts, SectionSolutions } from './styles';


import CardProdutos from '../../components/ProductsCard/index';
import HeaderPage from '../../components/Header/index';
import SolutionCard from '../../components/SolutionCard/index';


import CardImgBatedeira from '../../assets/CardProduto-batedeira.png';
import CardImgGeladeira from '../../assets/CardProduto-geladeira.png';
import CardImgBebida from '../../assets/CardProduto-bebida.png';

import LogoBrastemp from '../../assets/logo-brastemp.svg';
import LogoCompraCerta from '../../assets/logo-compracerta.svg';
import LogoConsul from '../../assets/logo-consul.svg';
import LogoTheBar from '../../assets/logo-thebar.svg';

import imgP1 from '../../assets/card-solution-p1.png';
import imgP2 from '../../assets/card-solution-p2.png';
import imgP3 from '../../assets/card-solution-p3.png';
import imgP4 from '../../assets/card-solution-p4.png';

const HomePage: React.FC = () => (
    <>
        <HeaderPage></HeaderPage>
        <SectionProducts>
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
                    <Col>
                        <div className={'container-title-right'}>

                            <CardProdutos imgPath={CardImgGeladeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'0px'} yPosition={'80px'}></CardProdutos>
                            <CardProdutos imgPath={CardImgBatedeira} textBtn={'Comprar em 12x'} zIndex={'100'} xPosition={'125px'} yPosition={'-50px'}></CardProdutos>
                            <CardProdutos imgPath={CardImgBebida} textBtn={'Adicionar à sacola'} zIndex={'1'} xPosition={'250px'} yPosition={'150px'}></CardProdutos>
                        </div>

                    </Col>
                </Row>
            </Container>

        </SectionProducts>

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










    </>



);

export default HomePage;











// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// }));

// export default function FullWidthGrid() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                     <Paper className={classes.paper}>xs=12</Paper>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <Paper className={classes.paper}>xs=12 sm=6</Paper>
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <Paper className={classes.paper}>xs=12 sm=6</Paper>
//                 </Grid>
//                 <Grid item xs={6} sm={3}>
//                     <Paper className={classes.paper}>xs=6 sm=3</Paper>
//                 </Grid>
//                 <Grid item xs={6} sm={3}>
//                     <Paper className={classes.paper}>xs=6 sm=3</Paper>
//                 </Grid>
//                 <Grid item xs={6} sm={3}>
//                     <Paper className={classes.paper}>xs=6 sm=3</Paper>
//                 </Grid>
//                 <Grid item xs={6} sm={3}>
//                     <Paper className={classes.paper}>xs=6 sm=3</Paper>
//                 </Grid>
//             </Grid>
//         </div>
//     );
// }
