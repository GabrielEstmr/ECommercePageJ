import styled from 'styled-components';


export const Card = styled.div`
    width: 241px;
    height: 381px;

    /* white */

    background: #FFFFFF;
    /* grey */

    border: 1px solid #F2F2F2;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    

    img{
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin: 16px 0 0 16px;
    }

    div{
        margin: 0 16px 16px 16px;

        h4{
            /* paragraph */
            font-family: Barlow;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
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
            font-size: 12px;
            line-height: 18px;
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
            font-size: 12px;
            line-height: 18px;
            /* identical to box height, or 150% */
            /* dark-grey */
            color: #5B5B5B;
            /* Inside Auto Layout */
            flex: none;
            order: 0;
            flex-grow: 0;
        }

        button{
            width: 209px;
            height: 48px;
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


