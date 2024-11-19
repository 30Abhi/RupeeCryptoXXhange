
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import CoinDetail from './Pages/CoinDetail'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coinID/:id' element={<CoinDetail/>} />
      </Routes>
    </div>
  )
}

export default App
