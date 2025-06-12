import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "react-use-cart"
import { UserProvider } from "./contexts/ContextUser"
import Footer from "./components/commons/Footer"
import Header from './components/commons/Header.js'
import Home from "./views/Home"
import Products from "./views/Products"
import Login from "./views/Login"
import Register from "./views/Register"
import Notfound from "./views/Notfound"
import Contact from "./views/Contact"

function App() {
   return (
      <React.StrictMode>
         <Router>
            <UserProvider>
               <CartProvider>
                  <Header />
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/Products" element={<Products />} />
                     <Route path="/Contact" element={<Contact />} />
                     <Route path="/Login" element={<Login />} />
                     <Route path="/Register" element={<Register />} />
                     <Route path="*" element={<Notfound />} />
                  </Routes>
                  <Footer />
               </CartProvider>
            </UserProvider>
         </Router>
      </React.StrictMode>
   )
}

export default App;
