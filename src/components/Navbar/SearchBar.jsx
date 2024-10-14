import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="flex-grow px-4 justify-center flex">
      {/* Full Search Bar for larger screens */}
      <div className="relative bg-[#2e2d2d] w-[712px] hidden md:block">
        <input
          type="text"
          className="w-full p-2 pl-10 border-0 rounded-md bg-[#2e2d2d]"
          placeholder="What are you looking for..."
        />
        <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Search Icon for mobile screens */}
      <div className="md:hidden flex items-center w-full">
        {/* If search is open, show the input field */}
        {isSearchOpen ? (
          <div className="relative w-full transition-all duration-300 ease-in-out">
            <input
              type="text"
              className="w-full p-2 pl-10 border-0 rounded-md bg-[#2e2d2d] transition-all duration-300"
              placeholder="What are you looking for..."
            />
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        ) : (
          <FiSearch
            className="text-gray-400 text-2xl cursor-pointer"
            onClick={toggleSearch}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
