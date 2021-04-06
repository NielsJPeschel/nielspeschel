import Image from 'next/image';
import styled from 'styled-components';
import Title from '../../public/title.svg';

const Landing = ( props ) => {
    const { shift } = props;
    return (
        <Background shift = {shift} >
            <Content>
                <Title />
                {/* <Title id = "title">
                    <Image
                        src = "/../public/title.svg"
                        height = "1000"
                        width = "1000"
                        layout = "responsive"
                    />
                </Title> */}
                <Line />
            </Content>
            
                
            
            
            
        </Background>

    );
}


export default Landing;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: calc( 0px - ${props => (props.shift)}px);
    width: 100%;
    height: 100%;
    background: white;
`;


const Content = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);
        width: 50vw;
    }
`;

// const Title = styled.div`
//     display: block;
//     width: 50vw;
//     height: 50vh;
//     /* max-width: 50vw;
//     max-height: 50vh; */
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -80%);
    
// `;

const Line = styled.div`
    width: 10%;
    height: 4px;
    background: black;   
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    
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


