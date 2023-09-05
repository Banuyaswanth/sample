import Cart from './components/cart';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
