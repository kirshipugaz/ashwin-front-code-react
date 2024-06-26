import SignUp from './pages/auth/SignUp'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './pages/auth/Login'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';


function App() {

  return (<>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
