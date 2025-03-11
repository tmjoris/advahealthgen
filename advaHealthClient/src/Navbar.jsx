import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Brand</h1>
      <ul className="hidden md:flex space-x-6">
        <li><a href="#" className="hover:text-gray-300">Demos</a></li>
        <li><a href="#" className="hover:text-gray-300">About Us</a></li>
        <li><a href="#" className="hover:text-gray-300">Services</a></li>
        <li><a href="#" className="hover:text-gray-300">Subscription Plan</a></li>
      </ul>
      <button className="bg-teal-400 text-black px-4 py-2 rounded-lg">Sign up</button>
    </nav>
  );
};

export default Navbar;