import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Nav from '../components/nav/Nav';
import Landing from '../components/landing/Landing';
import Summary from '../components/summary/Summary';


const LandingPage = () => {
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
          </FixedCanvas>
    </ScrollArea>

  )
}


export default LandingPage;


const ScrollArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 700vh;
`;

const FixedCanvas = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 100vw;
  overflow: none;
`;
