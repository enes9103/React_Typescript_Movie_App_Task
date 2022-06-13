import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Outlet,
  } from "react-router-dom";
import Navbar from "../components/Navbar";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import MovieList from "../pages/MovieList";

const AppRouter = () => {
  const { currentUser } = useContext(AuthContext);

  function PrivateRouter() {
    if (!currentUser) {
      return <Navigate to="/login" replace />;
    }

    return <Outlet />;
  }

  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<MovieList />} />
          <Route element={<PrivateRouter />}>
            <Route path="/details/:id" element={<MovieDetail />} />
          </Route>

          {/* <Route
          path="/details/:id"
          element={currentUser ? <MovieDetail /> : <Navigate to="/login" />}
        /> */}
      </Routes>
    </Router>
  )
}

export default AppRouter
