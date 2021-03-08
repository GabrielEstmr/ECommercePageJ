import styled from 'styled-components';

interface InputGroupProps {
  themeColor: string;
}


export const InputGroup = styled.div<InputGroupProps>`
  width: 31.375rem;
  height: 3.75rem;
  border-bottom: 1px solid #03FFA5;
  background-color: transparent;
  margin: 1.5rem 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  

  button{
    width: 5.57rem;
    height: 2.5rem;

    font-family: Barlow;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 2.5rem;
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
    font-size: 1rem;
    line-height: 1.5rem;
    color: #FFFFFF;
    background-color: transparent;
    border: none;

    ::placeholder {
        font-family: Barlow;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
        color: #FFFFFF;
    }

  }



`;


