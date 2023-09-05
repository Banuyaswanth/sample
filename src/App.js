import Cart from './components/cart';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
