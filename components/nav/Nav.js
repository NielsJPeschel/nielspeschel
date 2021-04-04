import Image from 'next/image';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyle>
            <div>
                <Image 
                    src = '/../public/nielspeschel.svg'
                    height = '70px'
                    width = 'auto'
                />
                <ul>
                    <li>About</li>
                    <li>Work</li>
                    <li>Social</li>
                </ul>
            </div>
            <div>
                <button>Contact</button>
            </div>
            
        </NavStyle>
    );
}

export default Nav;

const NavStyle = styled.nav`
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    background: white;
    width: 100vw;
    padding: 10px 50px;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: row;
    }
    ul {
        list-style: none;
        margin: 7px 40px;
        li {
            font-size: 14pt;
            display: inline;
            padding: 0 75px;
            text-transform: uppercase;
            :hover {
                border-bottom: 2px solid black;
            }
        }
    }

    button {
        background: black;
        color: white;
        border: none;
        margin: 10px;
        padding: 5px 50px;
        font-size: 14pt;
        text-transform: uppercase;
    }

`;

