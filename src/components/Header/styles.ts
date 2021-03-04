import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  
  div{
    /* max-width: 1920px; */
    width: 100%;
    height: 100%;
    font-size: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    .container-header-left{
      width: fit-content;
      height: 50px;
      margin: 0 0 0 24px;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      align-items: center;

      a{
        width: fit-content;
        min-width: 100px;
        text-overflow: ellipsis;
        img{
          height: 40px;
        }
      }

      .inner-content{
        margin: 0 32px 0 32px;
      }

  }


  .container-header-right{
      width: fit-content;
      height: 50px;
      margin: 0 24px 0 0;
      font-size: 16px;
      display: flex;
      align-items: center;

      a{
        width: auto;
      }

      input{
        width: 200px;
        height: 40px;
        border-radius: 24px;
        border: 1px solid #F2F2F2;
      }

      .inner-content{
        margin: 0 32px 0 32px;
      }
  }
  }
  
`;





