import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-long.avif";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b ">
      <div className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        {/* Left column (empty) */}
        <div className="hidden md:block" />

        {/* Center column */}
        <div className="flex flex-col items-center gap-2 relative w-full">
          {/* Top Row: Logo + Hamburger */}
          <div className="w-full flex justify-center items-center relative">
            <Link to="/" className="mx-auto">
              <img src={logo} alt="El Itacate Logo" className="h-15" />
            </Link>

            {/* Hamburger menu on right (mobile only) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="absolute right-0 md:hidden"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-row items-center gap-6 text-sm font-semibold font-Poiret tracking-wide mt-2">
            <Link to="/menu" className="hover:text-pink-600">
              Menu
            </Link>
            <Link to="/locations" className="hover:text-pink-600">
              Locations
            </Link>
            <Link to="/contact" className="hover:text-pink-600">
              Contact
            </Link>
            <Link to="/about" className="hover:text-pink-600">
              Our Story
            </Link>
            <a
              href="https://waitwhile.com/accounts/laspupusasdelitacate/waitlists"
              target="_blank"
              className="hover:text-pink-600"
            >
              Wait Times
            </a>
          </nav>

          {/* Mobile Nav (Dropdown) */}
          {menuOpen && (
            <div className="flex flex-col mt-2 items-center gap-2 text-sm font-semibold font-Poiret tracking-wide md:hidden">
              <a href="/menu" className="hover:text-pink-600">
                Menu
              </a>
              <a href="/locations" className="hover:text-pink-600">
                Locations
              </a>
              <a href="/contact" className="hover:text-pink-600">
                Contact
              </a>
              <Link to="/about" className="hover:text-pink-600">
                Our Story
              </Link>
              <a
                href="https://waitwhile.com/accounts/laspupusasdelitacate/waitlists"
                target="_blank"
                className="hover:text-pink-600"
              >
                Wait Times
              </a>
              {/* Work With Us Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSep86i1i91gLnFPue48tNWYYNgQ2VygiArFuKMFS62HTaI76A/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2 border-2 border-black text-black uppercase text-sm font-semibold tracking-wide rounded-md hover:bg-black hover:text-white transition duration-200 shadow-sm">
                  Work With Us
                </button>
              </a>

              {/* Order Online Button */}
              <a
                href="https://order.toasttab.com/online/locations/04be7929-06d8-4af4-a341-91c392b239b8/default"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2 bg-pink-600 text-white uppercase text-sm font-semibold tracking-wide rounded-md hover:bg-pink-700 transition duration-200 shadow-sm">
                  Order Online
                </button>
              </a>
            </div>
          )}
        </div>

        {/* Right column (desktop buttons) */}
        <div className="hidden md:flex flex-col items-end gap-2">
          {/* Work With Us Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSep86i1i91gLnFPue48tNWYYNgQ2VygiArFuKMFS62HTaI76A/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 border-2 border-black text-black uppercase text-sm font-semibold tracking-wide rounded-md hover:bg-black hover:text-white transition duration-200 shadow-sm">
              Work With Us
            </button>
          </a>

          {/* Order Online Button */}
          <a
            href="https://order.toasttab.com/online/locations/04be7929-06d8-4af4-a341-91c392b239b8/default"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 bg-pink-600 text-white uppercase text-sm font-semibold tracking-wide rounded-md hover:bg-pink-700 transition duration-200 shadow-sm">
              Order Online
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
