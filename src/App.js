import { Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './View/Landing/Landing';
import Homeview from './View/Home/Homeview';
import Aboutview from './View/About/Aboutview';
import Cardfavoritesview from './View/Cardfavorites/Cardfavorites';
import Carddetailsview from './View/CardDetails/Carddetailsview';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getApi } from './Redux/Actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApi('https://rickandmortyapi.com/api/character'));
  }, []);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    !access && navigate("/")
  }, [access])
  const email = "alondra@gmail.com";
  const password = "YURI2021op";

  const login = (form) => {
    if (form.email === email && form.password === password) {
      setAccess(true);
      navigate("/home")
    } else { alert("Credenciales incorrectas!") }
  }

  return (
    <Routes>
      <Route path='/' element={<Landing login={login} />} />
      <Route path='/home' element={<Homeview />} />
      <Route path='/about' element={<Aboutview />} />
      <Route path='/favorites' element={<Cardfavoritesview />} />
      <Route path='/detail/:id' element={<Carddetailsview />} />
    </Routes>

  );
}

export default App;