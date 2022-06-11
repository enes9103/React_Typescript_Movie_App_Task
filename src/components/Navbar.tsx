import React from 'react'
import { Link, Navigate } from "react-router-dom";


const Navbar = () => {
  const currentUser = {displayName: 'John Doe'}                 //usecontext oluşturulduktan sonra kaldırılacak
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className='container-fluid'>
        <Link to="/" className="navbar-brand text-white">
          <h4 className="">Movie App</h4>
        </Link>
        <div className="d-flex text-white align-items-center">
            {currentUser ? (
              <h5 className="mb-0 text-capitalize">
                {currentUser?.displayName}
              </h5>
            ) : (
              <button className="ms-2 btn btn-outline-light"
                onClick={() => Navigate("/login")}>
                  Login
              </button>
            )}
            </div>
        </div>
      </nav>
  </div>
  )
}

export default Navbar;
