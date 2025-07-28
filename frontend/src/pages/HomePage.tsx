import Carousel from '../components/Carousel';
import RecapVideo from '../components/RecapVideo';
import Diagonal from '../components/Diagonal';
import WatchVideos from '../components/WatchVideos';
import News from '../components/News';
// import SubscribeMailout from './SubscribeMailout';



const HomePage = () => {
  return (
    <>
        <Carousel />
        <br /> <br />
        <Diagonal />
        <br />
        <RecapVideo />
        <br />
        <WatchVideos />
        <News />
        {/* <SubscribeMailout />
        <br/><br/> */}
    </>
  )
}

export default HomePage;
