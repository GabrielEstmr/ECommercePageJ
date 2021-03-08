import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: #FFFFFF;
        color: #000000;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button, html {
        font-family: 'Barlow', serif;
        font-size: 16px;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }
    button {
        cursor: pointer;
    }

    @media only screen and (max-width: 3840px){
        html{
            font-size: 22px;
        }

        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1893px;
        }
    }

    @media only screen and (max-width: 2560px){
        html{
            font-size: 22px;
        }

        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1493px;
        }
    }

    @media only screen and (max-width: 1920px){
        html{
            font-size: 16px;
        }

        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1093px;
        }
    }

    @media only screen and (max-width: 1200px){
        .container, .container-lg, .container-md, .container-sm, .container-xl {
            max-width: 1193px;
        }
    }

    @media only screen and (max-width: 1000px){
        html{
            font-size: 15px;
        }
        #root{
            width: 100vh;
        }
    }

    @media only screen and (max-width: 500px){
        html{
            font-size: 15px;
        }
        #root{
            width: 100vh;
        }
    }
`;