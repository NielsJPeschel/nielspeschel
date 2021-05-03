import {useState, useEffect} from 'react';


export const useScroll = () => {
    const [scrollInfo, setScrollInfo] = useState({
        scrollY: 0,
        windowWidth: 0,
        windowHeight: 0
    });

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

    return scrollInfo;

}