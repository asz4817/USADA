import { Route, createBrowserRouter,  createRoutesFromElements, RouterProvider} from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import ContactUs from './pages/ContactUs';
import Admin from './pages/Admin';
import AboutUs from './pages/AboutUs';
import OurMembers from './pages/OurMembers';
import Compeitions from './pages/Compeitions';
import BoardOfDirectors from './pages/BoardOfDirectors';
import Donate from './pages/Donate';
import Registration from './pages/Registration';
import StructandLog from './pages/StructandLog';
import Battle from './components/Battle';
import ScoreandAwards from './pages/ScoreandAwards';
import TravelandLog from './pages/TravelandLog';
import Usada23 from './pages/Usada23';
import Usada24 from './pages/Usada24';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/about/board-of-directors' element={<BoardOfDirectors />} />
      <Route path='/members' element={<OurMembers />} />
      <Route path='/competitions' element={<Compeitions />} />
      <Route path='/competitions/registration' element={<Registration />} />
      <Route path='/competitions/structure-and-logistics' element={<StructandLog />} />
      <Route path='/competitions/scoring-and-awards' element={<ScoreandAwards />} />
      <Route path='/competitions/1v1battle' element={<Battle />} />
      <Route path='/competitions/travel-and-lodging' element={<TravelandLog />} />
      <Route path='/competitions/usada-2023' element={<Usada23 />} />
      <Route path='/competitions/usada-2024' element={<Usada24 />} />


      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/contact/donate' element={<Donate />}/>
      <Route path='/admin' element={<Admin />} />
      
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
