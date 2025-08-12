import {Routes, Route} from 'react-router';

import { HomePage } from './pages/Home-page'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path index element = {<HomePage/>} />   
      <Route path ="checkout" element = {<div>test</div>} /> 
    </Routes>
    
  )
}

export default App
