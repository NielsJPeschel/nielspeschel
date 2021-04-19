import Image from 'next/image';
import styled from 'styled-components';
import Logo from '../../public/nielspeschel.svg'

const Nav = () => {
    return (
        <NavStyle>

                <Logo />
                <ul>
                    <li>About</li>
                    <li>Work</li>
                    <li>Social</li>
                </ul>
    
        </NavStyle>
    );
}

export default Nav;

const NavStyle = styled.nav`
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    background: white;
    width: 100vw;
    padding: 0 50px;
    justify-content: space-between;
    svg {
        height: 40px;
        margin-top: 15px;
    }

    div {
        display: flex;
        flex-direction: row;
    }
    ul {
        list-style: none;
        margin: 10px 40px;
        li {
            font-size: 0.8rem;
            display: inline;
            padding: 0 3vw;
            text-transform: uppercase;
            :hover {
                border-bottom: 2px solid black;
            }
        }
    }

    button {
        color: white;
        border: 1px solid black;
        margin-top: 10px;
        margin-bottom: 20px;
        padding: 5px 50px;
        font-size: 0.8rem;
        text-transform: uppercase;
        background: black;

        :hover {
            background: white;
            color: black;
            cursor: grab;
        }
    }

`;

