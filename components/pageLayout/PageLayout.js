import styled from 'styled-components';
import {Nav} from '../nav';
import {Social} from '../social';

export const PageLayout = ( props ) => {
    const { children } = props;
    return (
        <div>
            <Nav />
            <Content>
                <Page>
                    {children}
                </Page>
                <Footer>
                    <Social />
                </Footer>
            </Content>
        </div>
    )
}
const Content = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    height: calc(100vh - 60px);
`;
const Page = styled.div`
    /* top: 60px;
    left: 0; */
    width: 100vw;
    min-height: calc(100vh - 160px);
`;

const Footer = styled.footer`
    width: 100vw;
    height: 100;
`;
