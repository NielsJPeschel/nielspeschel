import styled from 'styled-components';
import Logo from '../../public/nielspeschel.svg';
import Link from 'next/link'
import {MenuButton, MobileNav, NavLi} from './components'
import {useState} from 'react'

export const Nav = () => {
    const [ showMobileNav, setShowMobileNav ] = useState(false);

    const handleClick = () => {
        console.log('clicked')
        setShowMobileNav( prevVal => {
            return !prevVal;
        });
    }

    return (
        <div>
            <MenuButton showMobileNav = {showMobileNav} handleClick = {handleClick}/>
            <NavStyle>
                <Link href = './'>
                    <Logo />
                </Link>
                
                <ul>
                    <NavLi><Link href="/about">About</Link></NavLi>
                    <NavLi><Link href="/work">Work</Link></NavLi>
                    <NavLi><Link href="/fun">Fun</Link></NavLi>
                </ul>
               
                


            </NavStyle>
            {showMobileNav && <MobileNav showMobileNav = {showMobileNav} /> }
        </div>
        
    );
}


const NavStyle = styled.nav`
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    background: white;
    width: 100vw;
    padding: 0 50px;
    justify-content: space-between;
    overflow: visible;

    .nielspeschel_svg__nielspeschel {
        height: 40px;
        margin-top: 15px;
        cursor: pointer;
    }
    @media only screen and (max-width: 900px) {
        padding: 0 10px;
        
        .nielspeschel_svg__nielspeschel {
            height: 35px;
        }
    }
    

    div {
        display: flex;
        flex-direction: row;
    }


    ul {
        list-style: none;
        margin: 10px 40px;
        /* li {
            font-size: 0.8rem;
            display: inline;
            padding: 0 3vw;
            text-transform: uppercase;
            :hover {
                border-bottom: 2px solid black;
            }
        } */
        @media only screen and (max-width: 900px) {
            display: none;
        }
    }

`;


