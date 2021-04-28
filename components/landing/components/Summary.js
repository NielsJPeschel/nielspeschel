import styled from 'styled-components';
import TopHeavyDev from '../../../public/topheavydev.svg';

export const Summary = ( props ) => {
    const { shift, scrollInfo, scrollInfo: {scrollY, windowHeight, windowWidth} } = props;


    const calcShift = () => {
        if(shift < scrollInfo.windowWidth){
            return shift;
        } else if (shift > windowWidth && shift <= 8 * windowWidth) {
            // console.log(shift - (7 * windowWidth));
            return windowWidth;
        } else if(shift < 9 * scrollInfo.windowWidth ){
            return shift - 7 * windowWidth;
        } else {
            return 2 * windowWidth;
        }
    }

    const calcContentHeight = () => {

        if(shift < scrollInfo.windowWidth){
            return 0;
        }
        else if (scrollInfo.windowWidth <= shift && shift < 2 * scrollInfo.windowWidth){
            return (100*(scrollInfo.scrollY - (scrollInfo.windowHeight))/scrollInfo.windowHeight)
        }
        else if ( 2 * scrollInfo.windowWidth <= shift && shift < 7 * scrollInfo.windowWidth){
            return 100
        }
        else if (7 * scrollInfo.windowWidth <= shift && shift < 8 * scrollInfo.windowWidth){
            return 100 - (100*(scrollInfo.scrollY - (7 * scrollInfo.windowHeight))/scrollInfo.windowHeight)
        }
        else { 
            return 0;
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
        var opacity;
        if(shift < i * scrollInfo.windowWidth){
            opacity =  0;
        }
        else if (shift >= i * scrollInfo.windowWidth &&  shift < (i + 1) * scrollInfo.windowWidth){
            opacity =  (shift - (i * scrollInfo.windowWidth)) / scrollInfo.windowWidth;
        }
        else {
            opacity =  1 - ((shift - ((i + 1) * scrollInfo.windowWidth)) / scrollInfo.windowWidth);
        }

        if(isNaN(opacity)) {
            return 0;
        } else {
            return opacity;
        }

    }
    
    return (
        <Background  style = {{left: `calc(100vw - ${calcShift()}px)`}}>
            <Transition  style = {{ height: `${calcContentHeight()}%`, top: `${50 - (0.5 * calcContentHeight())}%`}}>
                <Content opacity = {calcContentHeight()} svgTranslate = {calcSvgTranslate()}  style = {{opacity: calcContentHeight()/100}}>
                    <TopHeavyDev />
                    <p>
                        I am a kinetic full stack developer - blending function and design - 
                        with an enthusiasm for innovation, usability, and creativity. Passions range 
                        from synthesizing algorithms to crafting UI/UX design. Bridging the gap between 
                        end-user visions and technical realization.
                    </p>
                    <Descriptions>
                        <div style = {{opacity: calcDescriptionOpacity(3)}}>
                            <h1>Designer</h1>
                            <p>
                                Beginning as a graphic designer, I always aim for unique, creative, 
                                yet calculated, approaches to my craft. I have launched numerous brands, 
                                logos, and experiences for a wide range of audiences 
                            </p>
                        </div>
                        <div style = {{opacity: calcDescriptionOpacity(5)}}>
                            <h1>Developer</h1>
                            <p>
                                This diverse background bridges the gap between 
                                end-user visions and technical realization. <b>Coding as an art.</b>
                            </p>
                        </div>
                        <div style = {{opacity: calcDescriptionOpacity(4) }}>
                            <h1>Algorithm Researcher</h1>
                            <p>
                                Mathematical and analytical skills led me to a degree in Computer Science and Engineering,
                                where I heavily researched algorithms. In this capacity, my experiences ranged from natural 
                                language querying to solving greedy clustering computations.
                            </p>
                        </div>
                    </Descriptions>
                </Content>
            </Transition>
        </Background>
    );
}

const Background = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;
    background: white;
    @media only screen and (max-width: 900px) { 
        left: 0 !important;
        background: red;
        position: relative;
        top: 0 !important;
        height: auto;

    }
`;

const Transition = styled.div`
    position: absolute;
    width: 100vw;
    border: 2px solid black;
    background: black;
    overflow: hidden;
    @media only screen and (max-width: 900px) { 
        left: 0 !important;
        top: 0 !important;
        height: 100vh !important;
        width: 100vw;
        position: relative;
        border: none;
        
    }
    
`;

const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5%;
    
    @media only screen and (max-width: 900px) {
        opacity: 1.0 !important;
        position: relative;

        p {
            position: relative;
            font-size: 1rem !important;
            line-height: 1.8rem;

        }

    }
    
    img {
        margin-top: 20%;
    }
    p {
        color: white;
        font-size: 1.2rem;
        opacity: ${props => (1 - (props.svgTranslate /40))};
        margin-top: 15px;

        span {
            color: #ff40df;
        }
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

        @media only screen and (max-width: 900px) {
            width: 120%;
            position: relative;
            margin: 50px 0;
            .topheavydev_svg__title, .topheavydev_svg__bottomStack, .topheavydev_svg__midStack {
                opacity: 1 !important;
                transform: none;
            }
           

        }
    }
   
`;


const Descriptions = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 67%;
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5%;
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
        padding: 5%;
        border-left: 1px solid white;

    }

    @media only screen and (max-width: 900px) {
        display: none;

    }
`;
