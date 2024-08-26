import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashNavFootOut from './Lyouts/DashNavFootOut';
import Home from './Pages/Home/Home';
import NewSearch from './components/NewSearch/NewSearch';
import Popular from './Pages/Popular/Popular';
import PopPeople from './Pages/PopPeople/PopPeople';
import AboutMovie from './Pages/AboutMovie/AboutMovie';
import AboutPopular from './Pages/AboutPopular/AboutPopular';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashNavFootOut />} >
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<NewSearch />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/popular--people' element={<PopPeople />} />
          <Route path='/movie/:id' element={<AboutMovie />} />
          <Route path='/popular/:id' element={<AboutPopular />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
