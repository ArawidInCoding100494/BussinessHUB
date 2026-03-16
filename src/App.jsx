
// rrd import
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// roots
import RootLayOut from "./Roots/RootLayOut"

// pages
import Home from "./Pages/Home/Home"
import Payments from "./Pages/Payments/Payments"
import Products from "./Pages/Products/Products" 
import Clients from "./Pages/Clients/Clients" 
import Taxes from "./Pages/Taxes/Taxes"
import LoginPage from "./Auth/LoginPage"
import Register from "./Auth/Register"

import { ThemeProvider} from "./Context/ThemeContext/ThemeContext"
import SuccessModal from "./Auth/SuccessModal"
import Splash from "./Auth/Splash"



function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayOut />} >
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="taxes" element={<Taxes/>} />
        <Route path="clients" element={<Clients />} />
        <Route path="payments" element={<Payments />} />
        <Route path="loginPage" element={<LoginPage/>} />
        <Route path="register" element={<Register />} />
        <Route path="successModal" element={<SuccessModal/>} />
        <Route path="splash" element={<Splash/>} />

      </Route>
    )
  )

  return(
    <ThemeProvider> 
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App
