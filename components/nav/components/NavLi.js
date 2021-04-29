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
    display: inline;
    text-transform: uppercase;
    font-size: 0.8rem;

    a {
        background-image: linear-gradient(black, black), linear-gradient(white, white);
        background-size: 0 100%, auto;
        background-repeat: no-repeat;
        background-position: center center;
        transition: all .4s ease-out;
        padding: 5px 40px;
        

        :hover, :focus {
            color: white;
            background-size: 100% 100%, auto;
            cursor:pointer;
            outline: none;
        }
    }
    



    
    
`;