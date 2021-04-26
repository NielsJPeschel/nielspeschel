import styled from 'styled-components';
import N from '../../../public/n.svg'
import {useState, useEffect} from 'react';

export const MobileNav = ( props ) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(100);
    }, [])
    const {showMobileNav} = props
    return (
        <Backgound height = {height} show = {showMobileNav} >
            <N fill = 'white' />
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
    height: ${props => props.height}vh;
    background: black;
    color: white;
    z-index: 100;
    transition: height 0.5s;
    text-align: center;
    padding: 0 25px;
    overflow: hidden;
    /* ${props => props.show ? '' : 'display: none'} */

    svg {
        stroke: white;
        fill: white;
        width: 200px;
        margin-top: 100px;
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