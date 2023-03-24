import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { CART, ROOT } from './CONSTANT'
import HomePage from '../pages/home'
import Cart from '../pages/cart';

export default function RouterConfig() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path={CART} element={<Cart />} />
            <Route exact path={ROOT} element={<HomePage />} />
        </Routes>
    </Router>
  )
}
