import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const NavLinks = () => {

  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    { name: "Smartphones", dropdown: ["Android", "iOS"] },
    { name: "Feature Phone", dropdown: [] },
    { name: "Smart TV", dropdown: ["LED", "OLED"] },
    { name: "Smart Gadget", dropdown: ["Wearables", "Home Automation"] },
    { name: "Home Care", dropdown: ["Vacuum Cleaners", "Air Purifiers"] },
    { name: "Personal Care", dropdown: [] },
    { name: "About Us", dropdown: [] },
    { name: "Support", dropdown: ["FAQs", "Contact Us"] },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle open/close
  };



  return (
    <div className="flex flex-col md:flex-row justify-between gap-[20px] md:w-[1001px]">
      {links.map((link, index) => (
        <div key={index} className="relative group">
          <button
            onClick={() => toggleDropdown(index)}
            className="hover:text-blue-500 flex items-center space-x-1 w-full md:w-auto"
          >            <span>{link.name}</span>
            {link.dropdown.length > 0 && (
              <>
                {/* Chevron Icon for Mobile */}
                <FiChevronDown
                  className={`text-sm transition-transform duration-300 md:hidden ${openDropdown === index ? 'rotate-180' : '-rotate-90'
                    }`}
                />
                {/* Chevron Icon for Desktop */}
                <FiChevronDown
                  className={`hidden md:block text-sm transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''
                    }`}
                />
              </>
            )}

          </button>

          {/* Dropdown Menu */}
          {link.dropdown.length > 0 && (
            <div className="absolute  z-50 hidden md:block left-0 bg-[#2e2d2d] top-full mt-2 w-48  shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="p-2">
                {link.dropdown.map((item, i) => (
                  <li key={i} className="p-2 hover:bg-[#656464]">
                    <a href="#" className="block">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {link.dropdown.length > 0 && (
            <div
              className={`${openDropdown === index ? 'block' : 'hidden'
                }  md:hidden left-0 top-full w-48 z-50 rounded-md transition-opacity duration-300`}
            >
              <ul className="p-2">
                {link.dropdown.map((item, i) => (
                  <li key={i} className="p-2 hover:bg-[#656464]">
                    <a href="#" className="block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default NavLinks;
