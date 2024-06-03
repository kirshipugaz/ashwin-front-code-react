import { useState } from 'react'
import SignUp from './pages/SignUp'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './pages/Login'
import {Routes, Route} from "react-router-dom";


function App() {

  return (<>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App