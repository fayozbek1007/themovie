import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashNavFootOut from './Lyouts/DashNavFootOut';
import Home from './Pages/Home/Home';
import NewSearch from './components/NewSearch/NewSearch';
import Popular from './Pages/Popular/Popular';
import PopPeople from './Pages/PopPeople/PopPeople';
import AboutMovie from './Pages/AboutMovie/AboutMovie';
import AboutPopular from './Pages/AboutPopular/AboutPopular';
import NowPlaying from './Pages/NowPlaying/NowPlaying';
import UPcoming from './Pages/Upcoming/Upcoming';
import TopRated from './Pages/TopRated/TopRated';
import AiringToday from './Pages/AiringToday/AiringToday';
import OnTv from './Pages/OnTv/OnTv';
import AboutPopularPeople from './Pages/AboutPopularPeopl/AboutPopularPeople';
import { Suspense } from 'react'; 
import './Js/i18n'; 
import { useTranslation } from 'react-i18next'; 

function App() {
  const { t, i18n } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <BrowserRouter>
        
        <Routes>
          <Route element={<DashNavFootOut />} >
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<NewSearch />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/now-playing' element={<NowPlaying />} />
            <Route path='/upcoming' element={<UPcoming />} />
            <Route path='/top-rated' element={<TopRated />} />
            <Route path='/airing-today' element={<AiringToday />} />
            <Route path='/on-tv' element={<OnTv />} />
            <Route path='/popular--people' element={<PopPeople />} />
            <Route path='person/:id' element={<AboutPopularPeople />} />
            <Route path='/movie/:id' element={<AboutMovie />} />
            <Route path='/popular/:id' element={<AboutPopular />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
