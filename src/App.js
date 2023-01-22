import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart'

function App() {
  return (
    <div className='flex flex-col'>
    <Provider store={store}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
