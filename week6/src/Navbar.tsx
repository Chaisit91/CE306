import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo: string;
  links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ logo, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md w-full z-10">
      <div className="px-4 py-3 flex justify-between items-center">
        
        <div className="text-xl font-bold text-blue-600">{logo}</div>

        
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        
        <button
          className="md:hidden flex flex-col justify-center items-center h-8 w-8 bg-gray-100 rounded"
          onClick={toggleMenu}
        >
          <span className="h-0.5 w-5 bg-gray-600 mb-1"></span>
          <span className="h-0.5 w-5 bg-gray-600 mb-1"></span>
          <span className="h-0.5 w-5 bg-gray-600"></span>
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t divide-y text-gray-700">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
