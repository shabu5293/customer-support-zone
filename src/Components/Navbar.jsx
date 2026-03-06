import React, { useState } from "react";
import Container from "./Container";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-white shadow-md border-b-[0.5px] border-gray-300">
        <Container>
          <nav className="flex px-8 py-4 justify-between items-center relative">
            {/* Logo */}
            <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>

            {/* Desktop View */}
            <div className="lg:flex hidden items-center gap-6">
              <a href="" className="text-gray-600">
                Home
              </a>
              <a href="" className="text-gray-600">
                FAQ
              </a>
              <a href="" className="text-gray-600">
                Changelog
              </a>
              <a href="" className="text-gray-600">
                Blog
              </a>
              <a href="" className="text-gray-600">
                Download
              </a>
              <a href="" className="text-gray-600">
                Contact
              </a>
              <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-lg hover:cursor-pointer">
                + New Ticket
              </button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-3 py-2 rounded-lg text-sm hover:cursor-pointer">
                + New Ticket
              </button>

              {isOpen ? (
                <X
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <Menu
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </div>

            {/* Mobile View */}
            {isOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-8 py-4 lg:hidden z-50 transition-all duration-300">
                <a href="#" className="text-gray-700 py-2 w-full">
                  Home
                </a>
                <a href="#" className="text-gray-700 py-2 w-full">
                  FAQ
                </a>
                <a href="#" className="text-gray-700 py-2 w-full">
                  Changelog
                </a>
                <a href="#" className="text-gray-700 py-2 w-full">
                  Blog
                </a>
                <a href="#" className="text-gray-700 py-2 w-full">
                  Download
                </a>
                <a href="#" className="text-gray-700 py-2 w-full">
                  Contact
                </a>
              </div>
            )}
          </nav>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
