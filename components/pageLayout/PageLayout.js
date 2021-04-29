import styled from 'styled-components';
import {Nav} from '../nav';

export const PageLayout = ( props ) => {
    const { children } = props;
    return (
        <div>
            <Nav />
            <Page>
                {children}
            </Page>


        </div>
    )
}

const Page = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 60px);
`;
