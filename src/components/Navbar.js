import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="appContainer">
        <div className="Logo">MATH MAGICIAN</div>
        <ul className="navLinks">
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/calculator">Calculator</Link>
          <Link className="links" to="/quote">Quote</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
