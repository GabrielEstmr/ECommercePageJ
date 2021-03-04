import styled from 'styled-components';

interface ContainerProps {
  zIndex: string;
  yPosition: string;
  xPosition: string;
}


export const Card = styled.div<ContainerProps>`
  width: 209px;
  height: 271px;

  background-color: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;

  z-index: ${(props) => props.zIndex};
  left:${(props) => props.xPosition};
  top: ${(props) => props.yPosition};


  img{
      max-width: 183px;
      max-height: 190px;
  }

  button{
    height: 48px;
    width: fit-content;
    min-width: 140px;
    max-width: 180px;
    text-overflow: ellipsis;
    background-color: #FFFFFF;
    margin-top: 10px;

    border: 1px solid #EE0E7D;
    box-sizing: border-box;
    border-radius: 24px;
    color: #EE0E7D;
  }
  
`;


