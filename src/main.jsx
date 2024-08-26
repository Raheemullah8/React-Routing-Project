import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contactUS/Contact'
import User from './components/users/User'
import Github,{githubInfoLoder} from './components/github/Github'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
// const router = createBrowserRouter([
//  {
//   path: '/',
//   element: <Layout />,
//   children:[
//     {
//       path : '',
//       element:<Home />
//     },
//     {
//       path : 'About',
//       element:<About />
//     },
//    {
//     path : "Contact",
//     element : <Contact />
//    }
//   ],
//  }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
       <Route
       loader={githubInfoLoder}
       path='Github'
        element={<Github />} />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
