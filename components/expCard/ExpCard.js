import styled from 'styled-components';

import {CardIcon} from './components';

export const ExpCard = ( props ) => {
    const { href, icon, title, techs, descr } = props;
    return(
        <CardAnchor href = {href}>
            <CardIcon icon = {icon}/>
            <CardContent>
                <h1>{title}</h1>
                <ul>
                    {techs.map( (tech, i) => (<li key = {i}>{tech}</li>))}
                </ul>
                <p>
                    {descr}
                </p>
            </CardContent>
        </CardAnchor>
    )
}

const CardAnchor = styled.a`
    display: flex;
    flex-direction: row;
    text-align: left;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 20px;
    :hover {
        border-color: black;
    }
    
    @media only screen and (max-width: 900px) { 
        flex-direction: column;
    }
`;

const CardContent = styled.div`
    padding: 10px 5px;
    margin-left: 30px;
    h1 {
        font-size: 1.7rem;
        font-weight: lighter;
        margin: 0;
        margin-bottom: 5px;
        /* text-transform: uppercase; */
    }
    ul {
        list-style: none;
        margin-bottom: 15px;
        display: flex;
        flex-wrap: wrap;

        li {
            /* display: inline; */
            font-size: 0.6rem;
            padding: 2px 12px;
            border-radius: 3px;
            border: 1px solid black;
            margin: 0 5px 5px 0;
            color: white;
            background: black;
            text-transform: lowercase;
        }
    }
    p {
        font-size: 0.9rem;
    }

    @media only screen and (max-width: 900px) { 
        margin: 5px;
    }
`;