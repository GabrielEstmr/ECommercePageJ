import styled from 'styled-components';

interface InputGroupProps {
    themeColor: string;
}


export const InputGroup = styled.div<InputGroupProps>`
  width: 502px;
  height: 60px;
  border-bottom: 1px solid #03FFA5;
  background-color: transparent;
  margin: 24px 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  

  button{
    width: 89px;
    height: 40px;

    font-family: Barlow;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    /* identical to box height, or 250% */
    text-transform: uppercase;
    /* green-jussi */
    color: #03FFA5;

    border: none;
    background-color: transparent;
  }





  input{
    width: 100%;
    height: 100%;

    font-family: Barlow;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    background-color: transparent;
    border: none;

    ::placeholder {
        font-family: Barlow;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
    }

  }



`;


