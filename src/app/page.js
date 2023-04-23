import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const page = () => {
  return (
    <div>
      <header>
        <img src="./assests/logo.png" alt="SKIT logo" />

        <nav className="flex items-center justify-between bg-primary py-3">
          <ul className="flex items-center flex-1 justify-around text-white">
            <NavbarItem link={"/"} title={"Home"} />
            <NavbarItem link="/alumni-directory" title={"Alumni Directory"} />
            <NavbarItem link="/activities" title={"Activities"} />
            <NavbarItem link="/aboutus" title={"About us"} />
            <NavbarItem link="/login" title={"Login"} />
          </ul>
        </nav>
      </header>
      <div className="hero-container w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="flex justify-center items-center h-full text-white">
          <h5 className="text-2xl font-bold">
            Welcome To Your SKit Alumni Website
          </h5>
        </div>
      </div>
      <div className="flex justify-center items-center py-16 h-full text-black">
        <p className="text-3xl font-semibold">
          Our Purpose of Alumni Association
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 w-50 mx-auto justify-center gap-4  py-4 px-8 md:px-14 lg:px-24  cursor-pointer 	">
        <div class=" border-primary border-2 bg-gray-200 shadow-md p-4 rounded-xl hover:border-blue-500">
          Our vision is a worldwide alumni network that fosters lifelong
          connections and engagement with the college, empowering alumni to make
          a positive impact in their lives and the community.
        </div>
        <div class="  bg-gray-300 p-4 rounded-xl">
          We aim to foster a spirit of lifelong learning and professional
          development, and to support the college's mission of promoting
          academic excellence, diversity, and social responsibility.
        </div>
        <div class="  bg-gray-400 p-4 rounded-xl">
          Our objectives are to increase alumni engagement through diverse
          programs and events, provide networking resources for career growth,
          and support the college's strategic initiatives through fundraising
          and advocacy.
        </div>
      </div>
    </div>
  );
};

export default page;
export const NavbarItem = ({ title, link }) => {
  return (
    <li
      href={link}
      className=" cursor-pointer mx-4 py-3 px-4 hover:opacity-90 hover:bg-green-600 rounded-md"
    >
      {title}
    </li>
  );
};
