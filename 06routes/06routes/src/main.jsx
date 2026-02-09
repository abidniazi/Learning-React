import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Github from './components/github/Github.jsx'
import User from './components/user/User.jsx'
// const router = createBrowserRouter([
// {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:'',
//       element:<Home/>
//     },{
//       path:'About',
//       element:<About/>
//     },
//     {
//       path:'Contact',
//       element:<Contact/>
//     },
//   ]
// }

// ])


const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='User/:userid' element={<User/>}/>
    <Route path='github' element={<Github/>}/>


  </Route>
)

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}
    
    
    />
  </StrictMode>,
)
