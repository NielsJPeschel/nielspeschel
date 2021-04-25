import styled from 'styled-components';
import Logo from '../../../public/nielspeschel.svg'


export const MobileNav = ( props ) => {
    const {showMobileNav} = props
    return (
        <Backgound show = {showMobileNav} >
            <Logo fill = 'white' />
            <ul>
                <li>About</li>
                <li>Work</li>
                <li>Social</li>
            </ul>
        </Backgound>
    );
    



}


const Backgound = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    color: white;
    z-index: 100;
    transition: all 0.25s ease-out;
    text-align: center;
    padding: 100px 25px;
    /* ${props => props.show ? '' : 'display: none'} */

    svg {
        stroke: white;
        fill: white;
        width: 400px;
        margin-bottom: 20px;
    }
    ul {
        list-style: none;

        li {
            font-size: 30px;
            text-transform: uppercase;
            padding: 20px 0;
        }
    }

`;