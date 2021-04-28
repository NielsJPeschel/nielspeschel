import styled from 'styled-components';
import Title from '../../../public/title.svg';



export const Header = ( props ) => {
    const { shift, scrollInfo, scrollInfo: {scrollY, windowHeight, windowWidth}  } = props;
    return (
        <Background shift = {shift} style = {{left: `${-100*(shift/windowWidth)}%`}}>
            <Content>
                <Title />
                <h1>
                    Coding<br />
                    As An<br />
                    Art
                </h1>
                <Line />
            </Content>
        </Background>
    );
}



const Background = styled.div`
    position: absolute;
    top: 0;
    /* left: calc( 0px - ${props => (props.shift)}px); */
    width: 100%;
    height: 100%;
    background: white;
    @media only screen and (max-width: 900px) { 
        position: relative;
        left: 0 !important;
        height: 80vh;
    }
`;


const Content = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 900px) { 
        height: 90vh;

    }
    

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        width: 55vw;
        @media only screen and (max-width: 900px) {
            display: none;
        }
    }

    h1 {
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translate(0, -50%);
        text-align: right;
        font-size: 70px;
        text-transform: uppercase;
        font-weight: lighter;
        line-height: 90px;
        @media only screen and (min-width: 900px) { 
            display: none
    }
    }
`;

const Line = styled.div`
    width: 10%;
    height: 4px;
    background: black;   
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    
    @media only screen and (max-width: 900px) {
        display: none;
    }
    
    ::before {
        font-size: 12pt;
        position: relative;
        left: -170px;
        top: -9px;
        content: "scroll down for more";
        width: 400px;
        white-space: nowrap;
   }
`;


