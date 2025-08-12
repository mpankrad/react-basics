import {Routes, Route} from 'react-router';

import { HomePage } from './pages/Home-page'
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element = {<HomePage />} />   
      <Route path ="checkout" element = {<CheckoutPage />} /> 
      <Route path ="orders" element = {<OrdersPage/>}></Route>
    </Routes>
    
  )
}

export default App
