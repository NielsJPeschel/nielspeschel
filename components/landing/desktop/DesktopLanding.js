import {useState, useEffect} from 'react';
import { Landing, Summary, Social } from './components';
import styled from 'styled-components';
import {Nav} from '../../../components/nav';
// import Landing from '../components/landing/Landing';
// import Summary from '../components/summary/Summary';
// import { Social } from '../components/social';

export const DesktopLanding = () => {
  const [scrollInfo, setScrollInfo] = useState({
    scrollY: 0,
    windowWidth: 0,
    windowHeight: 0
  })


  
  const calcShift = () => {
    return scrollInfo.scrollY <= 0 ? 0 : ((scrollInfo.scrollY * scrollInfo.windowWidth)/scrollInfo.windowHeight);
  }

  const updateScroll = () => {
    setScrollInfo({
      scrollY: window.pageYOffset,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    })
  }
  
  useEffect(() => {
      const watchScroll = () => {
        window.addEventListener("scroll", updateScroll);
      }
      watchScroll();


      return () => {
        window.removeEventListener("scroll", updateScroll);
      }

  })
  return (
    <ScrollArea>
          <Nav />
          <FixedCanvas>
            <Landing shift = {calcShift()} />
            <Summary shift = {calcShift()} scrollInfo = {scrollInfo}/>
            <Social shift = {calcShift()} scrollInfo = {scrollInfo} />
          </FixedCanvas>
    </ScrollArea>

  )
}


const ScrollArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 1000vh;
  
  @media only screen and (max-width: 600px) { 
    height: auto;
  }

`;

const FixedCanvas = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 100vw;
  overflow: none;

`;
