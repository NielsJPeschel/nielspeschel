import { DesktopLanding } from '../components/landing';
import { useMediaQuery } from 'react-responsive'


const Home = () => {
  const isDesktop = useMediaQuery({query: '(min-device-width: 1000px)'})
  
  if (isDesktop) {
    console.log('is desktop')
    return <DesktopLanding />
  } else {
    console.log('is mobile')
    return <div>Hello world</div>
  }
  
}


export default Home;


