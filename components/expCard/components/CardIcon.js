import styled from 'styled-components';

export const CardIcon = ( props ) => {
    const { icon, borderRadius = 15 } = props;
    
    return(
        <IconWrapper br = {borderRadius}>
            {icon}
        </IconWrapper>
    )
}


const IconWrapper = styled.div`
    /* display: inline-block; */
    background: black;
    /* border-radius: ${ props => props.br }; */
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    height: 150px;
    width: 150px;
    min-width: 150px;

    svg { 
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 70px;
        /* height: auto; */
        stroke: white;
    }


    @media only screen and (max-width: 900px) { 
    width: 100%;
    height: 100px;
    border-radius: 15px 15px 0 0;
    }
    /* border-top-left-radius: ${ props => props.br };
    border-bottom-left-radius: ${ props => props.br }; */
`;