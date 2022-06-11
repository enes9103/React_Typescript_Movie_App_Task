import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";

// type RoutePats = {
//     path: string,
// }

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
