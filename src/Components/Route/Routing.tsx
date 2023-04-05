import { Routes,Route } from "react-router"
import Navbar from "../NavElements/Navbar"
import { About } from "../NavElements/About"
import { Logout } from "../NavElements/Logout"
import { Profile } from "../NavElements/Profile"
import { Products } from "../NavElements/Products"
import { Home } from "../NavElements/Home"

export const Routing = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="products" element={<Products/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="Logout" element={<Logout/>} />
      </Routes>
    </div>
  )
}
