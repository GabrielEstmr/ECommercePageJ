import React from 'react';

import { Card } from './styles';


// import CardImgBatedeira from '../../assets/CardProduto-batedeira.png';


interface CardProductsProps {
    imgPath: string;
    textBtn: string;

    zIndex: string;
    yPosition: string;
    xPosition: string;
}



const CardProdutos: React.FC<CardProductsProps> = ({ imgPath, textBtn, zIndex, yPosition, xPosition }) => {

    return (
        <Card zIndex={zIndex} yPosition={yPosition} xPosition={xPosition}>
            <img src={imgPath}></img>
            <button>{textBtn}</button>
        </Card>
    )
}




export default CardProdutos;



