import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const customer = useSelector((state) => state.customer.currentCustomer);
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container j_flex">
          {/* <div className="catgrories d_flex">
            <span class="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div> */}

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link r_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}

              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/user-Account">User Account</Link>
              </li>
              <li>
                <Link to="/myOrder">My Orders</Link>
              </li>
              <li>
                <Link to="/contact">Second Hand Items</Link>
              </li>
              <li>
                <Link to="/customerSignIn">Sign In</Link>
              </li>
              <li>
                <Link to="/cusLogIn">Log In</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
