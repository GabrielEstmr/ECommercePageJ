import styled from 'styled-components';

interface ContainerProps {
  zIndex: string;
  yPosition: string;
  xPosition: string;
}


export const Card = styled.div<ContainerProps>`
  width: 13.06rem;
  height: 16.93rem;

  background-color: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-shadow: 0px 2rem 2rem rgba(0, 0, 0, 0.25);
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
      max-width: 11.43rem;
      max-height: 11.87rem;
  }

  button{
    height: 3rem;
    width: fit-content;
    min-width: 8.75rem;
    max-width: 11.25rem;
    text-overflow: ellipsis;
    background-color: #FFFFFF;
    margin-top: 0.625rem;

    border: 1px solid #EE0E7D;
    box-sizing: border-box;
    border-radius: 1.5rem;
    color: #EE0E7D;
  }
  
`;


