import styled from 'styled-components';


// icons
// import Facebook from '../../../public/social/facebook.svg'
// import Instagram from '../../../public/social/instagram.svg'
// import LinkedIn from '../../../public/social/linkedin.svg'
// import Mail from '../../../public/social/mail.svg'

import Facebook from '../../../../public/social/facebook.svg';
import Instagram from '../../../../public/social/instagram.svg';
import LinkedIn from '../../../../public/social/linkedin.svg';
import Mail from '../../../../public/social/mail.svg';





export const Social = ( props ) => {
    const { shift, scrollInfo, scrollInfo: {scrollY, windowHeight, windowWidth} } = props;
    return (
        <Background style = {{left: `${shift === 0? 500000: 9 * windowWidth - shift}px`}}>
            <ul>
                <li><a href = "https://www.facebook.com/niels.peschel/"><Facebook /></a></li>
                <li><a  href = "https://www.instagram.com/nielspeschel/" ><Instagram /></a></li>
                <li><a  href = "https://www.linkedin.com/in/niels-peschel-23038b15b/"><LinkedIn /></a></li>
                <li><a  href = "mailto:peschel.niels@gmail.com"><Mail /></a></li>
            </ul>
            <Line />
        </Background>
    )
}

const Background = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    ul {
        display: flex;
        display: center;
        position: absolute;
        top: 10%;
        left: 10%;;
        /* transform: translate(-50%, -50%); */
        list-style: none;
        width: 80%;
        height: 80%;
        justify-content: center;
        align-items: center;
        /* align-items: center; */
        /* white-space: nowrap; */

        li {
            display: inline;
            padding: 10px;
            height: 50px; 
            transform: translateY(-25%)

        }
    }

    svg {
        height: 50px;
        
        :hover {
            fill: #fc0093;
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
    left: 0;

`;