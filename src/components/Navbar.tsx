import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from '../helpers/AuthFirebase';
import { AuthContext } from "../context/AuthContext";
import logo from '../assets/logo.png';

const Navbar = () => {
  const { currentUser } : any = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className='container-fluid'>
        <Link to="/" className="navbar-brand text-white">
          <img className="logo" src={logo} alt="" />
        </Link>
        <Link to="/" className="navbar-brand text-white">
          <h4 className="">HOME</h4>
        </Link>
        {/* Conditions for the user to be a login register */}
        <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>
            ) : (
              <button className="ms-2 btn btn-outline-light" onClick={() => navigate("/login")}>
                  Login
              </button>
            )}
            {currentUser ? (
              <button
                className="ms-2 btn btn-outline-light" onClick={() => logOut()}>
                Logout
              </button>
            ) : (
              <button
                className="ms-2 btn btn-outline-light" onClick={() => navigate("/register")}>
                Register
              </button>
            )}
            </div>
        </div>
      </nav>
  </div>
  )
}

export default Navbar;
