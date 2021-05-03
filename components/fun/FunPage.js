import styled from 'styled-components';
import {useScroll} from '../../hooks';
import {PageTitle} from '../pageLayout';

import  { Canvas } from '../Canvas';


export const FunPage = () => {
    const { scrollY, windowHeight, windowWidth } = useScroll();
    const numFrames = 11;
    
    
   

    const calcImg = () => {
        if(windowHeight === 0) {
            return 0;
        }
        const perc = scrollY/windowHeight;
        const initPerc = 0.6;
        const finalPerc = 1;

        if( perc < initPerc) {
            return 0;
        }
        if(perc > initPerc && perc < finalPerc)
        {
            const ratio = (perc - initPerc)/(finalPerc - initPerc);
            return Math.floor(numFrames * ratio);

        }
        return numFrames - 1;
    }


    const draw = (ctx) => {
        const currentFrame = index => {
            return `bboy/frame${index}.jpg`
        }

        const preloadImages = () => {
            for (let i = 1; i < numFrames; i++) {
              const img = new Image();
              img.src = currentFrame(i);
            }
        }

        // const img = new Image()
        // img.src = currentFrame(1);
        // // canvas.width=windowWidth;
        // // canvas.height=770;
        // img.onload=function(){
        //     ctx.drawImage(img, 0, 0);
        // }

        

      

        // preloadImages();
        if (typeof window !== 'undefined') { 
            const img = new Image();
            const updateImage = index => {
                img.src = currentFrame(index);
                ctx.drawImage(img, 0, 0);
            }
            0
            img.src = currentFrame(0);
            img.onload=function(){
                ctx.drawImage(img, 0, 0);
            }

            requestAnimationFrame( () => updateImage(calcImg()));

            preloadImages();
        }

    }
    return(
        <>
            <PageTitle>When I'm Not Coding...</PageTitle>
            <Content>
                <Overlay />
                <Canvas draw = {draw} />

            </Content>
            
        </>
        
    );
    
}

const Content = styled.div`
    height: 500vh;
    background: black;
    margin-top: 30vh;
    position: relative;
`;




const Overlay = styled.div`
    width: 100%;
    height: 60vh;
    position: absolute;
    top: 0;
    background: linear-gradient(white, rgba(255,255,255, 0));
`;

// const Header = styled.div`
//     width: 100vw;
//     height: 50vh;
//     background-size: cover;
//     background-repeat: no-repeat;
//     /* background: pink; */
//     background-image: url(${frame0});
// `;