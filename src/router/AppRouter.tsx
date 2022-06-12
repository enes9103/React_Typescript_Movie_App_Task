import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Navbar from "../components/Navbar";
import MovieDetail from "../pages/MovieDetail";

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
