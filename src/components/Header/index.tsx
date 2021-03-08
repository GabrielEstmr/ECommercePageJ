import React, { useState, useCallback } from 'react';
import axios from 'axios';

import baseURL from '../../baseUrl';

import { Header } from './styles';

import HeaderImg from './assets/header-logo-jussi.svg';
import HeaderImgCart from './assets/header-shopping-cart.svg';

import SearchImg from './assets/search.svg';



const HeaderPage: React.FC = () => {

    const [resultados, setResultados] = useState([{}]);
    const [queryData, setQueryData] = useState("");

    async function handleSubmitSearch2() {

        try {

            const response = await axios.get(baseURL + queryData);

            const resultado = response.data.items;
            console.log(resultado);



            setResultados([resultado]);




        } catch (err) {
            console.log('erro');
            console.log(baseURL + `gabriel`);
        }

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQueryData(e.target.value)
        console.log(queryData)
    }



    return (
        <>
            <Header>
                <div>
                    <div className={'container-header-left'}>
                        <a><img src={HeaderImg}></img></a>
                        <a className={'a-inner-content-header'}>Nossas Soluções</a>
                        <a>Conheça a Jüssi</a>
                    </div>
                    <div className={'container-header-right'}>
                        <div className={'div-input'}>
                            <input placeholder='Buscar' onChange={handleChange} ></input>
                            <img onClick={handleSubmitSearch2} src={SearchImg}></img>
                        </div>
                        <a className={'inner-content-header'}>Login</a>
                        <a><img src={HeaderImgCart}></img></a>
                    </div>
                </div>



            </Header>
        </>
    );

};

export default HeaderPage;

















