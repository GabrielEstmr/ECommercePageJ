import styled from 'styled-components';


export const Card = styled.div`
    width: 15.06rem;
    height: 23.81rem;

    /* white */

    background: #FFFFFF;
    /* grey */

    border: 1px solid #F2F2F2;
    border-radius: 0.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media only screen and (max-width: 1000px){
      margin: 0 0 0 2.5rem;
    }

    @media only screen and (max-width: 500px){
      margin: 0 0 0 3.5rem;
    }

    img{
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 3.125rem;
        margin: 1rem 0 0 1rem;
    }

    div{
        margin: 0 1rem 1rem 1rem;

        h4{
            /* paragraph */
            font-family: Barlow;
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.5rem;
            /* identical to box height, or 150% */
            color: #000000;
            /* Inside Auto Layout */
            flex: none;
            order: 0;
            align-self: flex-start;
            flex-grow: 0;
        }

        p{
            font-family: Barlow;
            font-style: normal;
            font-weight: 500;
            font-size: 0.75rem;
            line-height: 1.125rem;
            /* identical to box height, or 150% */
            /* pink-jussi */
            color: #EE0E7D;
            /* Inside Auto Layout */
            flex: none;
            order: 1;
            align-self: flex-start;
            flex-grow: 0;
        }

        h5{
            font-family: Barlow;
            font-style: normal;
            font-weight: 500;
            font-size: 0.75rem;
            line-height: 1.125rem;
            /* identical to box height, or 150% */
            /* dark-grey */
            color: #5B5B5B;
            /* Inside Auto Layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        button{
            width: 13.06rem;
            height: 3rem;
            /* green-jussi */
            background: #03FFA5;
            border-radius: 6px;
            /* Inside Auto Layout */
            flex: none;
            order: 3;
            align-self: flex-end;
            flex-grow: 0;
            border: none;
        }
    }

    
  
`;


