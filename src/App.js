import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import store from './Redux/Store';
import Homepage from './Components/Homepage/Home';
import About from './Components/About/About';
import MenuHome from './Components/Menu/Menu';
import Mobilemenu from './Components/Menu/MobileMenu'
import CardFavorites from './Components/Card/Favorites';
import CardDetails from './Components/Details/CardDetails';
import Landing from './View/Landing';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <MenuHome />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<CardFavorites/>} />
          <Route path='/detail/:id' element={ <CardDetails/> }/>
        </Routes>
        <Mobilemenu/>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
