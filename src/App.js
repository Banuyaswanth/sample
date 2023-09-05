import Cart from './components/cart';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
