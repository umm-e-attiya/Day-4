"use client"
import { useState } from "react";

// Custom list of items
const generateRandomItems = () => {
  const items = [
    "T-shirt",
    "Shirt",
    "Jeans",
    "Pants",
    "Hoodies",
    "Jackets",
    "Joggers",
  ];
  return items.map((item, index) => ({ id: index + 1, name: item }));
};

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("product");
  const [showInput, setShowInput] = useState(false);

  const products = generateRandomItems();

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      {/* Mobile Toggle */}
      <button
        onClick={() => setShowInput(!showInput)}
        className="md:hidden w-[100px] h-[48px] p-2"
      >
        🔍
      </button>

      {/* Search Input */}
      <div
        className={`${
          showInput ? "block" : "hidden"
        } md:block bg-white p-2 rounded-md shadow-md`}
      >
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          
          className="lg:w-[577px] h-[48px] rounded-[62px] bg-gray-400"
        />
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="absolute bg-white w-full mt-2 shadow-md rounded-md">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="p-2 border-b">
                {product.name}
              </div>
            ))
          ) : (
            <p className="p-2 text-gray-500">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
