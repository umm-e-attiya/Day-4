"use client"
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); // For showing suggestions

  // Fetching products data
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type=="products"]{
          _id,
          name,
          description,
          price,
          "imageUrl": image.asset->url,
          category,
          discountPercent,
          "isNew": new,
          colors,
          sizes
        }
      `);
      setProducts(data);
      setFilteredProducts(data);
    };
    fetchData();
  }, []);

  // Handle search input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Show suggestions only when query has some value
    setShowSuggestions(query.length > 0);
  };

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(products); // Show all products if no query
    } else {
      const filtered = products.filter((product: any) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  return (
    <div className="search-container mt-10 flex justify-center relative">
      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="px-4 py-2 border lg:w-[577px] h-[48px] rounded-[62px] bg-gray-200"
      />

      {/* Search Suggestions */}
      {showSuggestions && filteredProducts.length > 0 && (
        <div
          className="absolute w-[90%] lg:w-[577px] bg-gray-100 shadow-md rounded-md z-40"
          style={{ top: "105%" }} // Adjust dropdown position slightly below the input
        >
          {filteredProducts.slice(0, 5).map((product: any) => (
            <div
              key={product._id}
              className="p-2 border-b cursor-pointer hover:bg-white"
            >
              <Link href={`/brand/${product._id}`} className="flex items-center">
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.name}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
                <p className="ml-2">{product.name}</p>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Fallback for No Results */}
      {showSuggestions && filteredProducts.length === 0 && (
        <div
          className="absolute w-[90%] lg:w-[577px] bg-gray-100 shadow-md rounded-md z-40"
          style={{ top: "105%" }} // Adjust dropdown position slightly below the input
        >
          <div className="p-2 text-gray-500">No results found</div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
