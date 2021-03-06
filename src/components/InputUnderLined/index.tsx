import React from 'react';

import { InputGroup } from './styles';


// import CardImgBatedeira from '../../assets/CardProduto-batedeira.png';


interface InputGroupProps {
    placeHolder: string;
    btnMsg: string;
    themeColor: string;
}



const InputUnderLined: React.FC<InputGroupProps> = ({ placeHolder, btnMsg, themeColor }) => {

    return (
        <InputGroup themeColor={themeColor}>
            <input placeholder={placeHolder} type={'email'}></input>
            <button>{btnMsg}</button>
        </InputGroup>
    )
}




export default InputUnderLined;



