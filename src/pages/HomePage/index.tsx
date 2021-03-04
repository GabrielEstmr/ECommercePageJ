import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Grid from '@material-ui/core/Grid';

import { SectionProducts } from './styles';


import CardProdutos from '../../components/ProductsCard/index';
import HeaderPage from '../../components/Header/index';


import CardImgBatedeira from '../../assets/CardProduto-batedeira.png';
// import CardImgGeladeira from '../../assets/CardProduto-geladeira.png';
// import CardImgBebida from '../../assets/CardProduto-bebida.png';



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

                            <CardProdutos imgPath={CardImgBatedeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'0px'} yPosition={'80px'}></CardProdutos>
                            <CardProdutos imgPath={CardImgBatedeira} textBtn={'Mais Detalhes'} zIndex={'100'} xPosition={'125px'} yPosition={'-50px'}></CardProdutos>
                            <CardProdutos imgPath={CardImgBatedeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'250px'} yPosition={'150px'}></CardProdutos>
                        </div>



                        {/* <CardProdutos imgPath={CardImgBatedeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'0px'} yPosition={'330px'}></CardProdutos>
                        <CardProdutos imgPath={CardImgBatedeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'130px'} yPosition={'-100px'}></CardProdutos>
                        <CardProdutos imgPath={CardImgBatedeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'255px'} yPosition={'-150px'}></CardProdutos> */}
                        {/* <div className={'container-title-left'}>
                            <CardProdutos imgPath={CardImgBatedeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'0px'} yPosition={'330px'}></CardProdutos>
                            <CardProdutos imgPath={CardImgBatedeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'130px'} yPosition={'-100px'}></CardProdutos>
                            <CardProdutos imgPath={CardImgBatedeira} textBtn={'Mais Detalhes'} zIndex={'1'} xPosition={'255px'} yPosition={'-150px'}></CardProdutos>


                            
                        </div> */}

                    </Col>
                </Row>
            </Container>

        </SectionProducts>


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
