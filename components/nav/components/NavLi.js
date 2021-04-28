import styled from 'styled-components'
export const NavLi = ( props ) => {
    
    const { children} = props;

    return (
        <Li>
            {children}
        </Li>
    );

}


const Li = styled.li`
    background-image: linear-gradient(black, black), linear-gradient(white, white);
    background-size: 0 100%, auto;
    background-repeat: no-repeat;
    background-position: center center;
    transition: all .4s ease-out;
    display: inline;
    padding: 5px 40px;
    text-transform: uppercase;
    font-size: 0.8rem;



    :hover {

        color: white;
        background-size: 100% 100%, auto;
        cursor:pointer;
    }
    
`;