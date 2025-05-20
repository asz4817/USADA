import Carousel from '../components/Carousel';
import RecapVideo from '../components/RecapVideo';
import Diagonal from '../components/Diagonal';
import WatchVideos from '../components/WatchVideos';
import News from '../components/News';



const HomePage = () => {
  return (
    <>
        <Carousel />
        <Diagonal />
        <RecapVideo />
        <WatchVideos />
        <News />
    </>
  )
}

export default HomePage;
