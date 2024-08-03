import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
// UseEffect to close the menu on location change
useEffect(() => {
  setMenuOpen(false);
}, [location]);
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <header className={`flex flex-col bg-transparent lg:px-16 md:flex-row justify-between items-center p-4 ${menuOpen ? 'h-screen bg-slate-400' : ''}`}>
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/" className="Logo text-green-300 font-mono text-xl">
          Travel
        </Link>
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl cursor-pointer"
          />
        </div>
      </div>
      <nav className={`flex-1 flex items-center justify-center ${menuOpen ? 'flex-col ' : 'hidden md:flex'}`}>
        <ul className={`flex  ${menuOpen ? 'flex-col items-center -mb-40' : 'space-x-4'}`}>
          <li className="my-2 md:my-0">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink to="/about" className="hover:underline">
              About
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink to="/pricing" className="hover:underline">
              Pricing
            </NavLink>
          </li>
          <li className="my-2 md:my-0">
            <NavLink to="/contact" className="hover:underline">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`${menuOpen ? 'flex items-center mb-40 ' : 'hidden md:flex'}`}>
        <NavLink
          to="#"
          className="bg-[#4475F2] py-2 px-6  rounded-3xl hover:border-blue-700 hover:border-2 text-white"
        >
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
