import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './router/HomePage';
import ProductsPage from './router/ProductsPage';
import PageNotFound from './router/PageNotFound';
import CartPage from './router/CartPage';
import OrdersPage from './router/OrdersPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
