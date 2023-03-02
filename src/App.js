import { Provider } from 'react-redux';
import Homepage from './Components/Homepage/Home';
import store from './Redux/Store';

function App() {
  return (
    <Provider store = {store}>
    <Homepage/>
    </Provider>
    
  );
}

export default App;
