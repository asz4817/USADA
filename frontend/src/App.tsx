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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/about/board-of-directors' element={<BoardOfDirectors />} />
      <Route path='/members' element={<OurMembers />} />
      <Route path='/competitions' element={<Compeitions />} />
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
