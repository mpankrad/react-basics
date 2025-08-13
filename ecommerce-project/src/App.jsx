import {Routes, Route} from 'react-router';


import { HomePage } from './pages/Home-page'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';

import './App.css'
import { Tracking } from './pages/Tracking';

function App() {

  return (
    <Routes>
      <Route index element = {<HomePage />} />   
      <Route path ="checkout" element = {<CheckoutPage />} /> 
      <Route path ="orders" element = {<OrdersPage/>}></Route>
      <Route path ="tracking" element = {<Tracking/>}></Route>
    </Routes>
    
  )
}

export default App
