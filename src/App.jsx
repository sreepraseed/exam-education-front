
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './page/LandingPage'
import RegisterPage from './page/RegisterPage'
import AllStudents from './page/AllStudents'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/allStudents' element={<AllStudents/>}/>
     </Routes>
    </>
  )
}

export default App
