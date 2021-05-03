import {useState, useEffect} from 'react';
import { Header, Summary, Social } from './components';
import styled from 'styled-components';
import {Nav} from '../../components/nav';

export const Landing = () => {
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
          <NavWrapper>
            <Nav />
          </NavWrapper>
          <FixedCanvas> 
            <Header shift = {calcShift()} scrollInfo = {scrollInfo}/>
            <Summary shift = {calcShift()} scrollInfo = {scrollInfo}/>
            <Social shift = {calcShift()} scrollInfo = {scrollInfo} />
          </FixedCanvas>
    </ScrollArea>

  )
}

const NavWrapper = styled.div`
  position: fixed;
  @media only screen and (max-width: 900px) { 
    position: absolute;
  }

`;
const ScrollArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 1000vh;
  
  @media only screen and (max-width: 900px) { 
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

  @media only screen and (max-width: 900px) { 
    position: absolute;
    left: 0;
    top: 60px;
    height: 200vh;
    background: white;;
  }
  

`;
