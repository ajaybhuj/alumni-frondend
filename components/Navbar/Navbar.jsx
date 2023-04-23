import React from "react";

const Navbar = (props) => {
  return (
    <header>
      <img src="./assests/logo.png" alt="SKIT logo" />

      <nav className="flex items-center justify-between bg-primary py-2">
        <div className="flex items-center flex-1 justify-between text-white">
          <a href="#" className="mx-4">
            Home
          </a>
          <a href="#" className="mx-4">
            Alumini Directory
          </a>
          <a href="#" className="mx-4">
            Activities
          </a>
          <a href="#" className="mx-4">
            About Us
          </a>
          <a href="#" className="mx-4">
            Login
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

const NavbarItem = (props) => {
  return (
    <a href="#" className="mx-4">
      Registeration
    </a>
  );
};
