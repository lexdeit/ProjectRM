import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import store from './Redux/Store';
import Landing from './View/Landing/Landing';
import Homeview from './View/Home/Homeview';
import Aboutview from './View/About/Aboutview';
import Cardfavoritesview from './View/Cardfavorites/Cardfavorites';
import Carddetailsview from './View/CardDetails/Carddetailsview';
import { useState } from 'react';

function App() {
  // const [acces, setAcces] = useState(false);
  // const navigate = useNavigate();
  // const email = "alondra@gmail.com";
  // const password = "YURI2021op!";

  // const login = (form) => {
  //   if (form.email === email && form.password === password) {
  //     setAcces(true);
  //     navigate("/home")
  //   }
  // }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Homeview />} />
          <Route path='/about' element={<Aboutview />} />
          <Route path='/favorites' element={<Cardfavoritesview />} />
          <Route path='/detail/:id' element={<Carddetailsview />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;