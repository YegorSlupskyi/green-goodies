import { useState, useEffect } from 'react';
import { breakpoints} from '@/styles/globals.style';

type WindowSizeProps = {
  width: number;
  height: number;
}

type WindowSizeType = {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}


const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });


  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};

export const useDeviceType = (): WindowSizeType & WindowSizeProps => {
  const { width, height } = useWindowSize();
  return {
    mobile: width < parseInt(breakpoints.tablet),
    tablet: width < parseInt(breakpoints.desktop),
    desktop: width >= parseInt(breakpoints.desktop),
    width, height
  }
};


export default useWindowSize;