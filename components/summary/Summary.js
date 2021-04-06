import styled from 'styled-components';
import Image from 'next/image';
import TopHeavyDev from '../../public/topheavydev.svg';

const Summary = ( props ) => {
    const { shift, scrollInfo } = props;

    const calcShift = () => {
        if(shift < scrollInfo.windowWidth){
            return shift;
        } else {
            return scrollInfo.windowWidth;
        }
    }

    const calcContentHeight = () => {

        if(shift < scrollInfo.windowWidth){
            return 0;
        }
        else if (scrollInfo.windowWidth <= shift && shift < 2 * scrollInfo.windowWidth){
            return (100*(scrollInfo.scrollY - (scrollInfo.windowHeight))/scrollInfo.windowHeight)
        }
        else { 
            return 100;
        }
    }

    const calcSvgTranslate = () => {
        if(shift < 2.5 * scrollInfo.windowWidth){
            return 0;
        }
        else if (shift >= 2.5 * scrollInfo.windowWidth &&  shift < 3 * scrollInfo.windowWidth){
            return (200 * (shift - (2.5 * scrollInfo.windowWidth)) / scrollInfo.windowWidth);
        }
        else {
            return 100;
        }
    }
    const calcDescriptionOpacity = (i) => {
        if(shift < i * scrollInfo.windowWidth){
            return 0;
        }
        else if (shift >= i * scrollInfo.windowWidth &&  shift < (i + 1) * scrollInfo.windowWidth){
            return (shift - (i * scrollInfo.windowWidth)) / scrollInfo.windowWidth;
        }
        else {
            return 1 - ((shift - ((i + 1) * scrollInfo.windowWidth)) / scrollInfo.windowWidth);
        }
    }
    const calcAlgorithmOpacity = () => {

    }
    const calcDeveloperOpacity = () => {

    }
    return (
        <Background shift = {calcShift()}>
            <Transition height = {calcContentHeight()}>
                <Content opacity = {calcContentHeight()} svgTranslate = {calcSvgTranslate()}>
                    <TopHeavyDev />
                    <p>
                        I am a kinetic full stack developer - blending function and design - 
                        with an enthusiasm for innovation, usability, and creativity. Passions range 
                        from synthesizing algorithms to crafting UI/UX design. Bridging the gap between 
                        end-user visions and technical realization.
                    </p>
                    <Descriptions>
                        <Designer opacity = {calcDescriptionOpacity(3)}>
                            <h1>Designer</h1>
                            <p>I began as a graphic designer, always aiming for a unique, creative, yet calculated, approach to designing. Since then, I have created numerous brands, logos, and experiences for a wide range of audiences </p>
                        </Designer>
                        <Developer opacity = {calcDescriptionOpacity(5)}>
                            <h1>Developer</h1>
                            <p>My diverse background uniquely positions me to </p>
                        </Developer>
                        <Algorithm opacity = {calcDescriptionOpacity(4)}>
                            <h1>Algorithm Researcher</h1>
                            <p>My  education  and passions in mathematics led me to research algorithms,  to which I developed and derived several algorithms that ranged from natural language querying to solving greedy clustering computations</p>
                        </Algorithm>
                    </Descriptions>
                </Content>
            </Transition>
        </Background>
    );
}
export default Summary;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: calc( 100vw - ${props => (props.shift)}px);
    width: 100vw;
    height: 100%;
    background: white;
`;


const Transition = styled.div`
    position: absolute;
    width: 100vw;
    height: ${props => props.height}%;
    border: 2px solid black;
    background: black;
    top: calc(50% - ${props => 0.5 * props.height}%);
    overflow: hidden;
    
`;

const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5%;
    opacity: ${props => props.opacity/100};
    /* padding-top: 10%; */
    img {
        margin-top: 20%;
    }
    p {
        color: white;
        font-size: 1.2rem;
        opacity: ${props => (1 - (props.svgTranslate /40))};
        margin-top: 15px;
    }
    svg {
        width: 70%;
        overflow: visible; 
        .topheavydev_svg__title{
            opacity: ${props => (1 - (props.svgTranslate / 40))}
        }
        .topheavydev_svg__bottomStack{
            transform: translate(0, ${props => (2 * props.svgTranslate) }px);
        }
        .topheavydev_svg__midStack {
            transform: translate(0, ${props => props.svgTranslate }px);
        }
        .topheavydev_svg__topStack {
            /* transform: translate(0, ${props => props.svgTranslate }px); */
        }
    }
   
`;


const Descriptions = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 67%;
    width: 33%;
    height: 100%;
    h1{ 
        color: white;
        text-transform: uppercase;
        font-size: 1.5rem;
    }
    p {
        opacity: inherit;
        font-size: 0.9rem;
    }
    div {
        margin: 17%;
    }
`;
const Designer = styled.div`
    opacity: ${ props => (props.opacity)};
`;

const Algorithm = styled.div`
    opacity: ${ props => (props.opacity)};
`;

const Developer = styled.div`
    opacity: ${ props => (props.opacity)};
`;