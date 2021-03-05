import React from 'react';

import { Card } from './styles';


// import CardImgBatedeira from '../../assets/CardProduto-batedeira.png';


interface CardSolutionProps {
    srcImg: string;
    nomeProd: string;
    descptProd: string;
    feature1: string;
    feature2: string;
    feature3: string;
}



const SolutionCard: React.FC<CardSolutionProps> = ({ srcImg, nomeProd, descptProd, feature1, feature2, feature3 }) => {

    return (
        <Card >
            <img src={srcImg}></img>
            <div>
                <h4>{nomeProd}</h4>
                <p>{descptProd}</p>
                <h5>{feature1}</h5>
                <h5>{feature2}</h5>
                <h5>{feature3}</h5>
                <button>Ver Solução</button>
            </div>
        </Card>
    )
}




export default SolutionCard;



