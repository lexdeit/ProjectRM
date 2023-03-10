import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import store from './Redux/Store';
import Homepage from './Components/Homepage/Home';
import About from './Components/About/About';
import MenuHome from './Components/Menu/Menu';
import Mobilemenu from './Components/Menu/MobileMenu'
import CardFavorites from './Components/Card/Favorites';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <MenuHome />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<CardFavorites/>} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
