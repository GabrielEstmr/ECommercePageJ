import styled from 'styled-components';

interface PropsSectionWeAreJussi {
  backgroundImg: string;
};

export const SectionProducts = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 35rem;
  background: #03FFA5;

  display: flex;
  justify-content: center;
  align-items: center;

  .container-title-left{
    width: 100%;
    min-width:18.75rem;
    height: 22.5rem;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    h2{
      width: 5.43rem;
      height: 4.81rem;

      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 4rem;
      line-height: 4.81rem;
      /* identical to box height */

      text-transform: uppercase;

      /* white */

      color: #FFFFFF;

      /* Inside Auto Layout */

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 0px;
    }

    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h1{
        width: 28.28rem;
        height: 14.43rem;
        /* extra-large */
        font-family: Barlow;
        font-style: normal;
        font-weight: 500;
        font-size: 4rem;
        line-height: 4.81rem;
        text-transform: uppercase;
        /* black */
        color: #000000;
        /* Inside Auto Layout */
        flex: none;
        flex-grow: 0;
        margin: 0px 0px;
      }

      p{
        width: 20.56rem;
        height: 4.5rem;
        margin-top: 1rem;

        /* paragraph */
        font-family: Barlow;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
        /* or 150% */
        color: #000000;
      }

      button{
        width: 12.25rem;
        height: 3rem;
        padding: 0.75rem 1.5rem;
        background-color: transparent;

        display: flex;
        flex-direction: row;
        align-items: center;
        /* black */
        border: 1px solid #000000;
        border-radius: 0.375rem;
      }
    }

  }

  .container-title-right{
    width: 100%;
    min-width:18.75rem;
    min-height: 22.5rem;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    
  }


  .col-modified{
    @media only screen and (max-width: 1000px){
      margin: 10rem;
    }

    @media only screen and (max-width: 500px){
      margin: 10rem;
  }
  }

`;


export const SectionBrands = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 5rem;
  background: #F2F2F2;

  display: flex;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    justify-content: center;
    align-items: center;

    h5{
      width: 18.75rem;
    }
  }
`;


export const SectionSolutions = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 34.81rem;
  background: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container-title{
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin: 0 0 0.875rem 0;

    @media only screen and (max-width: 1000px){
      margin: 1rem 0 0.875rem 0;
    }

    @media only screen and (max-width: 500px){
      margin: 1rem 0 0.875rem 0;
    }

    span{
      /* width: 31px;
      height: 40px; */

      font-family: Barlow;
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.5rem;
      /* identical to box height, or 125% */
      text-transform: uppercase;
      /* green-jussi */
      color: #03FFA5;
      /* Inside Auto Layout */
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 0.25rem;
    }

    h2{
      /* width: 279px;
      height: 40px; */

      /* large */

      font-family: Barlow;
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.5rem;
      /* identical to box height, or 125% */
      text-transform: uppercase;
      /* black */
      color: #000000;
      /* Inside Auto Layout */
      /* flex: none;
      order: 1;
      flex-grow: 0;
      margin: 0px 4px; */
    }
  }
`;



export const SectionWeAreJussi = styled.div<PropsSectionWeAreJussi>`
  width: 100%;
  height: fit-content;
  min-height: 40.5rem;
  background: #FFFFFF;
  background-image: url(${props => props.backgroundImg});
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  

  .container-infos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2{
      width: 15.06rem;
      height: 5rem;
      /* large */
      font-family: Barlow;
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.5rem;
      /* or 125% */
      text-transform: uppercase;
      /* black */
      color: #000000;
      /* Inside Auto Layout */

    }

    p{
      width: 15.06rem;
      height: 18.25rem;
      /* paragraph */
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
      /* black */
      color: #000000;
      /* Inside Auto Layout */

    }

    button{
      /* Auto Layout */
      width: 10.125rem;
      height: 3rem;
      border: 1px solid #000000;
      border-radius: 0.375rem;
      background-color: transparent;

      /* Inside Auto Layout */
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      /* black */

      

      
      /* identical to box height, or 150% */


      /* black */

      color: #000000;

    }

  }

  img{
    width: 42.25rem;
    height: 32.5rem;
    margin: 0 0 0 1.25rem;

    @media only screen and (max-width: 1000px){
      width: 100%;
      height: 24.5rem;
      margin: 3rem 0 0 1.25rem;
    }

    @media only screen and (max-width: 500px){
      width: 100%;
      height: 24.5rem;
      margin: 3rem 0 0 1.25rem;
    }
  }
`;



export const SectionContact = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 30rem;
  background: #EE0E7D;

  display: flex;
  justify-content: center;
  align-items: center;
  

  .container-infos{
    width:42.5rem;
    height:13.75rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1000px){
      width:40.5rem;
    }

    @media only screen and (max-width: 500px){
      width:40.5rem;
    }

    h3{
      width: 42.25rem;
      height: 7.5rem;
      /* large */
      font-family: Barlow;
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.5rem;
      /* or 125% */
      text-align: center;
      text-transform: uppercase;
      /* white */
      color: #FFFFFF;

      @media only screen and (max-width: 1000px){
        width:40.5rem;
      }

      @media only screen and (max-width: 500px){
        width:40.5rem;
      }
    }

    span{
      width: 7.625rem;
      height: 1.5rem;
      margin: 2rem 0 0 0;
      /* paragraph */
      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5rem;
      /* identical to box height, or 150% */
      text-align: center;
      /* white */
      color: #FFFFFF;
    }

    h4{
      width: 21.06rem;
      height: 1.5rem;
      margin: 0.5rem 0 0 0;

      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      line-height: 1.5rem;
      /* identical to box height, or 75% */
      text-align: center;
      /* white */
      color: #FFFFFF;
    }

  }


`;





export const SectionNews = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 27.25rem;
  background: #000000;

  display: flex;
  justify-content: center;
  align-items: center;
  

  .container-infos{
    width:42.5rem;
    height:13.75rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container-title{
      width:42.5rem;
      height:5rem;

      display: flex;
      justify-content: center;
      align-items: baseline;

      @media only screen and (max-width: 1000px){
        width:40.5rem;
      }
  
      @media only screen and (max-width: 500px){
        width:40.5rem;
      }

      h3{
        width: 42.25rem;
        height: 5rem;
        /* large */
        font-family: Barlow;
        font-style: normal;
        font-weight: bold;
        font-size: 2rem;
        line-height: 2.5rem;
        /* or 125% */
        text-align: center;
        text-transform: uppercase;
        /* white */
        color: #FFFFFF;
        @media only screen and (max-width: 1000px){
          width:40.5rem;
        }
    
        @media only screen and (max-width: 500px){
          width:40.5rem;
        }
      }

      span{
        width: 1.81rem;
        height: 1.5rem;

        font-family: Barlow;
        font-style: normal;
        font-weight: bold;
        font-size: 2rem;
        line-height: 1.5rem;
        /* green-jussi */
        color: #03FFA5;
      }
    }

    

  }


`;














