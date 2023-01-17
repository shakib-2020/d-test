import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="headerArea">
          <div className="logo">
            <img src="assets/img/logo/logo-test.png" alt="" />
          </div>
          <div className="menu">
            <nav>
              <a href="">Theory test</a>
              <a href="">Theory test</a>
              <a href="">Theory test</a>
            </nav>
            <div className="nav-btn">
              <a className="btn transparent-btn" href="#">
                Sign In
              </a>
              <a className="btn" href="#">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
