import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex align-middle justify-around bg-pink-600 text-center text-sm text-white py-4 border-t h-[5vh]">
      <p>© {new Date().getFullYear()} El Itacate. All rights reserved.</p>
      <div className="flex gap-4 text-xl">
        <p className="text-sm">Follow us:</p>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTiktok />
        </a>
      </div>
    </footer>
  );
}
