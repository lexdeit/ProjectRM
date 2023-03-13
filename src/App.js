import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './Redux/Store';
import Landing from './View/Landing/Landing';
import Homeview from './View/Home/Homeview';
import Aboutview from './View/About/Aboutview';
import Cardfavoritesview from './View/Cardfavorites/Cardfavorites';
import Carddetailsview from './View/CardDetails/Carddetailsview';


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Landing /> } />
          <Route path='/home' element={ <Homeview /> } />
          <Route path='/about' element={ <Aboutview/> } />
          <Route path='/favorites' element={ <Cardfavoritesview/> } />
          <Route path='/detail/:id' element={ <Carddetailsview/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
