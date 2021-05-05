import styled from 'styled-components';
import N from '../../../public/N.svg'
import {useState, useEffect} from 'react';
import Link from 'next/link'


export const MobileNav = ( props ) => {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setHeight(100);
    }, [])
    const {showMobileNav} = props
    return (
        <Backgound height = {height} show = {showMobileNav} >
            <Link href = './'>
                <N fill = 'white' />
            </Link>
            <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/work">Work</Link></li>
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
        cursor: pointer;
    }
    ul {
        list-style: none;
        margin: 0 30%;

        li {
            font-size: 30px;
            text-transform: uppercase;
            padding: 30px 0 0;
            background-image: linear-gradient(white, white), linear-gradient(black, black);
            background-size: 0 5px, auto;
            background-repeat: no-repeat;
            background-position: center bottom;
            transition: all .4s ease-out;

            :hover, :focus {
            /* The following line makes the underline only as wide as the text */
            /* background-size: calc(100% - 2em) 5px, auto; */
            background-size: 100% 2px, auto;
            }
        }
    }

`;