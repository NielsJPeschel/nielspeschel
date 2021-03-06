import styled from 'styled-components';


export const MenuButton = ( props ) => {
    const {showMobileNav, handleClick} = props;
    return (
        <Button  clicked = {showMobileNav} onClick = {handleClick}>
            <Line darkMode = {showMobileNav}/>
            <Line darkMode = {showMobileNav}/>
            {/* <Line darkMode = {!showMobileNav}/>
            <Line darkMode = {!showMobileNav}/> */}
        </Button>

    )
}



const Button = styled.button`
    position: fixed;
    right: 15px;
    top: 15px;
    /* display: block; */
    cursor: grab;
    background: rgba(0,0,0,0);
    border: none;
    height: 24px;
    /* padding: 15px; */
    z-index: 99999;

    div:nth-child(1) {
        transform: ${ props => props.clicked ? 'rotate(45deg) translate(2px, 8px)' : 'none'};
    }
    div:nth-child(2) {
        transform: ${ props => props.clicked ? 'rotate(-45deg) translate(-1px, -6px)' : 'none'};
    }
   
    @media only screen and (min-width: 900px) {
            display: none;
    }


`;

const Line = styled.div`
    position: relative;
    display: block;
    width: 28px;
    height: 1px;
    /* background: blue; */
    background: ${ props => props.darkMode ? 'white' :  'black'};
    margin: 0 0 10px 0;
    transition: all 0.25s ease-out;
    transform: rotate(180deg);

    ::before {
        position: absolute;
        bottom: 1px;
        left: 0;
        background: white;
        /* background: ${ props => !props.darkMode ? 'white' :  'black'}; */
        width: 28px;
        height: 1px;
        content: ''
    }
    /* border-top: 1px solid white; */
`