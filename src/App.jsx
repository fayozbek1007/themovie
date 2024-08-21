import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashNavFootOut from './Lyouts/DashNavFootOut';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashNavFootOut />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
