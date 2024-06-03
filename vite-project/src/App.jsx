import { useState } from 'react'
import SignUp from './pages/SignUp'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './pages/Login'
import {Routes, Route} from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (<>
    <div>{count}</div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
