import styled from 'styled-components';

interface InputGroupProps {
  themeColor: string;
}


export const Footer = styled.div<InputGroupProps>`
  width: 100%;
  height: 5rem;
  background-color: ${props => props.themeColor};
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .container-content-left{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img{
        width: 8.875rem;
        height: 1.687rem;
    }
  }

  .container-content-right{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img{
        margin: 0 0.5rem 0 0.5rem;
        width: 2rem;
        height: 2rem;
    }
  }

`;


