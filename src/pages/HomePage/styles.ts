import styled from 'styled-components';


export const SectionProducts = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 560px;
  background: #03FFA5;

  display: flex;
  justify-content: center;
  align-items: center;

  .container-title-left{
    width: 100%;
    min-width:300px;
    height: 360px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    h2{
      width: 87px;
      height: 77px;

      font-family: Barlow;
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 77px;
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
        width: 451px;
        height: 231px;
        /* extra-large */
        font-family: Barlow;
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 77px;
        text-transform: uppercase;
        /* black */
        color: #000000;
        /* Inside Auto Layout */
        flex: none;
        flex-grow: 0;
        margin: 0px 0px;
      }

      p{
        width: 329px;
        height: 72px;
        margin-top: 16px;

        /* paragraph */
        font-family: Barlow;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* or 150% */
        color: #000000;
      }

      button{
        width: 196px;
        height: 48px;
        padding: 12px 24px;
        background-color: transparent;

        display: flex;
        flex-direction: row;
        align-items: center;
        /* black */
        border: 1px solid #000000;
        box-sizing: border-box;
        border-radius: 6px;
      }
    }

  }

  .container-title-right{
    width: 100%;
    min-width:300px;
    min-height: 360px;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

`;


export const SectionBrands = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 80px;
  background: #F2F2F2;

  display: flex;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    justify-content: center;
    align-items: center;

    h5{
      width: 300px;
    }
  }
`;


export const SectionSolutions = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 557px;
  background: #FFFFFF;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container-title{
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin-bottom: 14px;

    span{
      /* width: 31px;
      height: 40px; */

      font-family: Barlow;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
      /* identical to box height, or 125% */
      text-transform: uppercase;
      /* green-jussi */
      color: #03FFA5;
      /* Inside Auto Layout */
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 4px;
    }

    h2{
      /* width: 279px;
      height: 40px; */

      /* large */

      font-family: Barlow;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
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








































// export const Sections = styled.div`

//   .section-products{
//     background: #03FFA5;

//     .container-title-left{
//       width: 100%;
//       height: 560px;

//       display: flex;
//       justify-content: center;
//       align-items: flex-start;

//       h2{
//         width: 87px;
//         height: 77px;

//         font-family: Barlow;
//         font-style: normal;
//         font-weight: 500;
//         font-size: 64px;
//         line-height: 77px;


//         text-transform: uppercase;


//         color: #FFFFFF;


//         flex: none;
//         order: 0;
//         flex-grow: 0;
//         margin: 0px 0px;
//       }

//       div{
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: flex-start;

//         h1{
//           width: 451px;
//           height: 231px;

//           font-family: Barlow;
//           font-style: normal;
//           font-weight: 500;
//           font-size: 64px;
//           line-height: 77px;
//           text-transform: uppercase;

//           color: #000000;

//           flex: none;
//           flex-grow: 0;
//           margin: 0px 0px;
//         }

//         p{
//           width: 329px;
//           height: 72px;
//           margin-top: 16px;


//           font-family: Barlow;
//           font-style: normal;
//           font-weight: 500;
//           font-size: 16px;
//           line-height: 24px;

//           color: #000000;
//         }

//         button{
//           width: 196px;
//           height: 48px;
//           padding: 12px 24px;
//           background-color: transparent;

//           display: flex;
//           flex-direction: row;
//           align-items: center;

//           border: 1px solid #000000;
//           box-sizing: border-box;
//           border-radius: 6px;
//         }
//       }

//     }

//     .container-title-right{
//       width: 100%;
//       height: 560px;

//       display: flex;
//       justify-content: center;
//       align-items: flex-start;
//     }
//   }

// `;