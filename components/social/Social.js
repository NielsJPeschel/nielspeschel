import styled from 'styled-components';

import Facebook from '../../public/social/facebook.svg';
import Instagram from '../../public/social/instagram.svg';
import LinkedIn from '../../public/social/linkedin.svg';
import Mail from '../../public/social/mail.svg';




export const Social = () => {
    return (
        <Background>
            <ul>
                <li><a href = "https://www.facebook.com/niels.peschel/"><Facebook /></a></li>
                <li><a  href = "https://www.instagram.com/nielspeschel/" ><Instagram /></a></li>
                <li><a  href = "https://www.linkedin.com/in/niels-peschel-23038b15b/"><LinkedIn /></a></li>
                <li><a  href = "mailto:peschel.niels@gmail.com"><Mail /></a></li>
            </ul>
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 50px 0;;

    ul {
        display: flex;
        display: center;
        position: absolute;
        top: 10%;
        left: 10%;;
        list-style: none;
        width: 80%;
        height: 80%;
        justify-content: center;
        align-items: center;


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
