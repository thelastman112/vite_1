import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../pages/App"
import Aboutus from "../pages/Aboutus"

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/About" element={<Aboutus />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers