import Navebar from './Components/Navbare/Navebar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
//import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import MenPage from './Pages/MenPage';
import WOT from "./Pages/WOT"
import KID from './Pages/KID';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navebar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/MEN' element={<MenPage/>} />
        <Route path='/WOMEN' element={<WOT />} />
        <Route path='/KIDS' element={<KID/>} />
        <Route path='/Product' element={<Product/>}>
          <Route path=':ProductId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/Login' element={<LoginSingup/>} />
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
