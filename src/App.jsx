
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bienvenida from './components/bienvenida/bienvenida';
import NotFound from './components/notFound/notFound';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { CartComponentContext } from './context/cartContext';
import Cart from './components/cart/cart';
import CreateProducts from './components/createProducts/createProducts';
import Login from './components/login/login';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import Register from './components/register/register';
import Categories from './components/categories/categories';

function App() {

  return (
    <CartComponentContext>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Bienvenida />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:id' element={<ItemDetailContainer />} />
          <Route path="/productos/category" element={<Categories />} />
          <Route path="/productos/category/:category"  element={<Categories/>}/>
          {/* <Route path="/productos/category/:category" element={<ItemListContainer />} /> */}
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/postProduct' element={<ProtectedRoute element={<CreateProducts />} />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>

      </BrowserRouter>

    </CartComponentContext>
  )
}

export default App
