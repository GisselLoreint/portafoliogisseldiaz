import ReactDOM from 'react-dom/client';
import {BrowserRouter,Navigate,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Jobs from './pages/Jobs';
import Error404 from './pages/Error404';
import Studies from './pages/Studies';
import Skills from './pages/Skills';
import Study from './pages/Study';
import Job from './pages/Job';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about-me' element={<Aboutme/>}></Route>
    <Route path='/jobs' element={<Jobs/>}></Route>
    <Route path='*' element={<Error404/>}></Route>
    <Route path='/studies' element={<Studies/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/home' element={<Navigate replace to={"/"}/>}></Route>
    <Route path='/studies/:id' element={<Study/>}></Route>
    <Route path='/jobs/:id' element={<Job/>}></Route>
  </Routes>
  </BrowserRouter>
);

