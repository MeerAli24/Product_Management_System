
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Addproduct from './component/Addproduct';
import Editproduct from './component/Editproduct';
function App() {
  return (
<div>
<Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addProduct' element={<Addproduct/>}></Route>
      <Route path='/EditProduct/:id' element={<Editproduct/>}></Route>
      
      </Routes>
  </div>
  );
}

export default App;
