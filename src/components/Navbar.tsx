"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/Image/logo.svg";
import Question from "@/Image/Question.svg";
import bell from "@/Image/Bell.svg";
import search from "@/Image/Search.svg";
import Rimage from "@/Image/Rimage.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // State for managing dropdowns
  const [openDropdown, setOpenDropdown] = useState("");

  // Function to toggle specific dropdown
  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? "" : dropdown);
  };

  return (
    <>
      <header className="bg-[#F9F4EC] border-b-[1px] border-[#F1E5D1] px-4 py-2 flex items-center justify-between relative">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <div className="md:border-r-2 border-[#F1E5D1] p-2">
            <Image src={Logo} alt="logo" />
          </div>
          {/* Icons Section (Visible on all screen sizes) */}
          <div className="flex items-center space-x-3 lg:space-x-4 md:hidden">
            {/* <span className="h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center">
              <Image src={Question} alt="question" />
            </span> */}
            <span className="h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center">
              <Image src={bell} alt="bell" />
            </span>
            <Image src={Rimage} alt="profile" />
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-normal text-[#333333]">
              Hi Welcome Back!
            </p>
            <h1 className="text-[20px] font-bold">Mahesh G. Patel</h1>
          </div>
        </div>

        {/* Right Section: Large Screens */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-full bg-white border border-[#CFA7674D] px-4 py-3 text-sm focus:outline-none w-[300px]"
            />
            <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
              <Image src={search} alt="search" />
            </span>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            <span className="h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center">
              <Image src={Question} alt="question" />
            </span>
            <span className="h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center">
              <Image src={bell} alt="bell" />
            </span>
            <Image src={Rimage} alt="profile" />
          </div>
        </div>

        {/* Toggler Button for Mobile View */}
        <button
          className="absolute right-4 md:hidden flex items-center justify-center p-2 rounded-md bg-[#F1E5D1]"
          onClick={() => setMenuOpen(true)}
        >
          <Bars3Icon className="h-5 w-5" />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-20"
              onClick={() => setMenuOpen(false)}
            ></div>

            {/* Menu Content */}
            <div className="fixed top-0 right-0 bg-white shadow-lg w-4/5 h-screen z-30 transform transition-transform duration-300">
              {/* Menu Items */}
              <nav className="mt-4">
                <ul className="space-y-4 px-4 text-lg text-gray-700">
                  <li className="font-bold">DASHBOARD</li>
                  <li className="hover:text-black cursor-pointer">WEB</li>
                  <li className="hover:text-black cursor-pointer">MASTER</li>
                  <li className="hover:text-black cursor-pointer">USERS</li>
                </ul>
              </nav>
              {/* <div className="p-4 flex flex-col space-y-4"> */}
              {/* Logo and User Info */}
              {/* <div className="flex items-center space-x-4 pt-[50px]">
                  <div className="border-r-2 border-[#F1E5D1] p-2">
                    <Image src={Logo} alt="logo" />
                  </div>
                  <div>
                    <p className="text-xs font-normal text-[#333333]">
                      Hi Welcome Back!
                    </p>
                    <h1 className="text-[20px] font-bold">Mahesh G. Patel</h1>
                  </div>
                </div> */}

              {/* Search Box */}
              {/* <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="rounded-full bg-white border border-[#CFA7674D] px-4 py-3 text-sm focus:outline-none w-full"
                  />
                  <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
                    <Image src={search} alt="search" />
                  </span>
                </div> */}

              {/* Icons */}
              {/* <div className="flex items-center space-x-3">
                  <span className="h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center">
                    <Image src={Question} alt="question" />
                  </span>
                  <span className="h-[40px] w-[40px] bg-black rounded-full flex items-center justify-center">
                    <Image src={bell} alt="bell" />
                  </span>
                  <Image src={Rimage} alt="profile" />
                </div>
              </div> */}

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 flex items-center justify-center p-2 rounded-sm bg-[#F1E5D1]"
                onClick={() => setMenuOpen(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </>
        )}
      </header>
      {/* <!-- Navigation Links --> */}
      <nav className="lg:flex items-center space-x-6 relative bg-[#F4EBDD] p-2 pl-6 hidden">
        {/* <!-- Dashboard Dropdown --> */}
        <div className="relative">
          <button
            className="text-[#333333] font-normal hover:text-[#CFA767] text-sm"
            onClick={() => toggleDropdown("dashboard")}
          >
            DASHBOARD
          </button>
          {openDropdown === "dashboard" && (
            <div className="absolute bg-white shadow-md rounded-md py-2 w-32 border border-black transition-transform duration-300 transform ease-in-out">
              <a
                href="/dashboard/overview"
                className="block px-1 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300"
              >
                Overview
              </a>
              <a
                href="/dashboard/stats"
                className="block px-1 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300"
              >
                Stats
              </a>
              <a
                href="/dashboard/reports"
                className="block px-1 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300"
              >
                Reports
              </a>
            </div>
          )}
        </div>

        {/* <!-- Web Dropdown --> */}
        <div className="relative">
          <button
            className="text-[#333333] font-normal hover:text-[#CFA767] text-sm"
            onClick={() => toggleDropdown("web")}
          >
            WEB
          </button>
          {openDropdown === "web" && (
            <div className="absolute bg-white shadow-md rounded-md py-2 w-32 border border-black transition-transform duration-300 transform ease-in-out">
              <a
                href="/web/design"
                className="block px-1 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300 "
              >
                Web Design
              </a>
              <a
                href="/web/development"
                className="block px-1 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300 whitespace-nowrap"
              >
                Web Development
              </a>
              <a
                href="/web/seo"
                className="block px-1 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300"
              >
                SEO
              </a>
            </div>
          )}
        </div>

        {/* <!-- Masters Dropdown --> */}
        <div className="relative">
          <button
            className="text-[#333333] font-normal hover:text-[#CFA767] text-sm"
            onClick={() => toggleDropdown("masters")}
          >
            MASTERS
          </button>
          {openDropdown === "masters" && (
            <div className="absolute bg-white shadow-md rounded-md py-2 w-32 border border-black transition-transform duration-300 transform ease-in-out">
              <a
                href="/masters/data"
                className="block px-1 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300 whitespace-nowrap"
              >
                Data Management
              </a>
              <a
                href="/masters/users"
                className="block px-1 py-2 p-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300 whitespace-nowrap"
              >
                User Management
              </a>
            </div>
          )}
        </div>

        {/* <!-- Expense Dropdown --> */}
        <div className="relative">
          <button
            className="text-[#333333] font-normal hover:text-[#CFA767] text-sm"
            onClick={() => toggleDropdown("expense")}
          >
            EXPENSE
          </button>
          {openDropdown === "expense" && (
            <div className="absolute bg-white shadow-md rounded-md py-2 w-32 border border-black transition-transform duration-300 transform ease-in-out">
              <a
                href="/expense/overview"
                className="block px-2 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300 whitespace-nowrap"
              >
                Expense Overview
              </a>
              <a
                href="/expense/reports"
                className="block px-2 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300 whitespace-nowrap"
              >
                Expense Reports
              </a>
            </div>
          )}
        </div>

        {/* <!-- Admin Dropdown --> */}
        <div className="relative">
          <button
            className="text-[#333333] font-normal hover:text-[#CFA767] text-sm"
            onClick={() => toggleDropdown("admin")}
          >
            ADMIN
          </button>
          {openDropdown === "admin" && (
            <div className="absolute bg-white shadow-md rounded-md py-2 w-32 border border-black transition-transform duration-300 transform ease-in-out">
              <a
                href="/admin/settings"
                className="block px-1 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300"
              >
                Settings
              </a>
              <a
                href="/admin/logs"
                className="block px-1 py-2 text-sm hover:bg-[#F9F4EC] transition-colors duration-300"
              >
                Logs
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
