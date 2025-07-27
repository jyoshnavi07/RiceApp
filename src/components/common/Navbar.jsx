import React from 'react';
import { BRAND_NAME } from '../../utils/constants';
import SecondaryBtn from './SecondaryBtn';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* title */}
          <h3 className='title'>{BRAND_NAME}</h3>
          {/* btn for collapse nav */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            {/* attaching this div for above btn */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* nav items */}
              <ul className="navbar-nav me-auto mb-2 mx-auto  mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
              </ul>
              {/* btn and icons */}
              <div className='gx-2 nav-profile align-items-center d-flex -content-center '>
                {/* <button className="btn nav-btn">Become a Dealer</button> */}
                <SecondaryBtn title='Become a Dealer' />
                <i className="bi bi-cart-dash-fill fs-5"></i>

                  {/* Profile Dropdown on Hover */}
                  <div className="dropdown">
                    <i
                      className="bi bi-person-circle profile-hover fs-5 "
                      id="profileDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      role="button"
                    ></i>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                      <li><Link className="dropdown-item" to='/profile'>Profile</Link></li>
                      <li><a className="dropdown-item" href="#">Orders</a></li>
                      <li><a className="dropdown-item" href="#">Wishlist</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
                    </ul>
                  </div>

              </div>
            </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;