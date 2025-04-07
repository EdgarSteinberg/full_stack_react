
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bienvenida from './components/bienvenida/bienvenida';
import NotFound from './components/notFound/notFound';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { CartComponentContext } from './context/cartContext';
import Cart from './components/cart/cart';
import ProductCreate from './components/productCreate/productCreate';
import Login from './components/login/login';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import Register from './components/register/register';
import Categories from './components/categories/categories';
import Profile from './components/profile/profile';
import UploadDocs from './components/uploadDocs/uploadDocs';
import HeaderMenu from './components/headerMenu/headerMenu';
import Filtros from './components/filtros/filtros';
import Ticket from './components/ticket/ticket';
import TicketDetail from './components/ticketDetail.jsx/ticketDetail';
import Contactanos from './components/contactanos/contactanos';
import RecoverPassword from './components/recoverPassword/recoverPassword';
import ResetPassword from './components/resetPassword/resetPassword';
import Users from './components/users/users';
import Footer from './components/footer/footer';

function App() {

  return (
    <CartComponentContext>

      <BrowserRouter>
        <HeaderMenu />
        <NavBar />
        <Routes>
          <Route path='/' element={<Bienvenida />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:id' element={<ItemDetailContainer />} />
          <Route path="/productos/category" element={<Categories />} />
          <Route path="/productos/category/:category" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/postProduct' element={
            <ProtectedRoute>
              <ProductCreate />
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/uploadDocs' element={<UploadDocs />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/filter' element={<Filtros />} />
          <Route path='/ticket' element={<Ticket />} />
          <Route path='/ticket/:id' element={<TicketDetail />} />
          <Route path='/contactanos' element={<Contactanos />} />
          <Route path='/recover-password' element={<RecoverPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/users' element={<Users />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </CartComponentContext>
  )
}

export default App
