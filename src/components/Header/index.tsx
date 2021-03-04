import React from 'react';

import { Header } from './styles';

import HeaderImg from '../../assets/header-logo-jussi.svg';
import HeaderImgCart from '../../assets/header-shopping-cart.svg';


const HeaderPage: React.FC = () => (
    <>
        <Header>
            <div>
                <div className={'container-header-left'}>
                    <a><img src={HeaderImg}></img></a>
                    <a className={'inner-content'}>Nossas Soluções</a>
                    <a>Conheça a Jüssi</a>
                </div>
                <div className={'container-header-right'}>
                    <input placeholder='Buscar'></input>
                    <a className={'inner-content'}>Login</a>
                    <a><img src={HeaderImgCart}></img></a>
                </div>
            </div>

        </Header>
    </>
);

export default HeaderPage;




