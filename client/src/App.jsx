import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Toaster from 'react-hot-toast'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster reverseOrder={false}/>
    </>
  )
}

export default App
