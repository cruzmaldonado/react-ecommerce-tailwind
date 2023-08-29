import { useRoutes, BrowserRouter } from "react-router-dom"
import {ShoppingCartProvider} from "../../Context"

import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import Navbar from "../../Components/Navbar"

import './App.css'
//* AppRoutes crea el arbol de rutas para la pagina y BrowserRouter permite enlazar las rutas con un componente.
const AppRoutes= () => {
  let routes =useRoutes([
    {path:'/',element:<Home/>},
    {path:'/My-account',element:<MyAccount/>},
    {path:'/My-order',element:<MyOrder/>},
    {path:'/My-orders',element:<MyOrders/>},
    {path:'/*',element:<NotFound/>},   //? el * es para cualquier otra ruta que no este especificada.
    {path:'/Sign-in',element:<SignIn/>}
    ])
    return routes
}


const App= () => {
  
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
