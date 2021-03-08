import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
  
  div{
    /* max-width: 1920px; */
    width: 100%;
    height: 100%;
    font-size: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    .container-header-left{
      width: fit-content;
      height: 3.125rem;
      margin: 0 0 0 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      display: flex;
      align-items: center;

      a{
        width: fit-content;
        min-width: 6.25rem;
        text-overflow: ellipsis;
        /* paragraph */
        font-family: Barlow;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
        /* identical to box height, or 150% */
        /* black */
        color: #000000;

        @media only screen and (max-width: 1000px){
          min-width: 5.25rem;
        }
    
        @media only screen and (max-width: 500px){
          min-width: 5.25rem;
        }
        
        img{
          height: 2.5rem;
          @media only screen and (max-width: 1000px){
            height: 1.7rem;
          }
      
          @media only screen and (max-width: 500px){
            height: 1.7rem;
          }
        }
      }
      }

      .a-inner-content-header{
        margin: 0 2rem 0 2rem;
        @media only screen and (max-width: 1000px){
          margin: 0 0 0 1rem;
          width: 3rem;
        }
    
        @media only screen and (max-width: 500px){
          margin: 0 0 0 1rem;
          width: 3rem;
        }
      }

    

  }


  .container-header-right{
      width: fit-content;
      height: 3.125rem;
      margin: 0 1.5rem 0 0;
      font-size: 1rem;
      display: flex;
      align-items: center;

      a{
        width: auto;
        /* paragraph */
        font-family: Barlow;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
        /* identical to box height, or 150% */
        /* black */
        color: #000000;
        margin: 0 2rem 0 2rem;

        @media only screen and (max-width: 1000px){
          margin: 0 1rem 0 1rem;
        }
    
        @media only screen and (max-width: 500px){
          margin: 0 1rem 0 1rem;
        }
      }
      }

      .div-input{
        width: 12.5rem;
        height: 2.5rem;
        border-radius: 1.5rem;
        border: 1px solid #F2F2F2;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        input{
          width: 8.75rem;
          height: 100%;
          margin: 0 0.5rem 0 1rem;
          border:none;

          ::placeholder {
              font-family: Barlow;
              font-style: normal;
              font-weight: 500;
              font-size: 1rem;
              line-height: 1.5rem;
              color: #EE0E7D;
          }
        }

        img{
          width: 1.5rem;
          height: 1.5rem;
          margin: 0 1.25rem 0 0px;
          border:none;
        }
      }

     
  }


}`;





