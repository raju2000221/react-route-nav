import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import First from './Components/First/First.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App></App>
//   },
//   {
//     path:'/about',
//     element: <About></About>
//   },
//   {
//     path:'/contact',
//     element:<Contact> </Contact>
//   }
// ])

const router =createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children: [
      {
        path:'about',
        element:<About></About>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
