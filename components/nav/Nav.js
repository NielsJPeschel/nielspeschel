import Image from 'next/image';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavStyle>
            <div>
                <Image 
                    src = '/../public/nielspeschel.svg'
                    height = '70'
                    width = '300'
                    layout = 'fixed'
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
            padding: 0 10%;
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

