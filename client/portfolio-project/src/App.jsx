import { useState } from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import NotFound from './pages/notFound/NotFound'
import EditProfile from './components/editProfile/EditProfile'
import './style.scss'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path='/profile/:username' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/editprofile' element={<EditProfile />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>

  )
}

export default App
