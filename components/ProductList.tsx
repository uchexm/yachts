"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ui/ProductCard";
import Header from "./ui/Header";
import { Product } from "@/types";
import Papa from "papaparse";

interface ProductListProps {
  itemsPerPage: number;
}

const ProductList: React.FC<ProductListProps> = ({ itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [yachtNames, setYachtNames] = useState<string[]>([]); //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://my.api.mockaroo.com/yacht_listings.json?key=7efefdd0"
        );

        if (response.ok) {
          const text = await response.text();
          const parsedData = Papa.parse(text, { header: true }).data;

          const validData: Product[] = parsedData
            .filter((entry: any) => entry.yacht_name !== null)
            .map((entry: any) => ({
              yacht_name: entry.yacht_name,
              manufacturer: entry.manufacturer,
              year_built: entry.year_built,
              length: entry.length,
              fuel_type: entry.fuel_type,
              number_of_cabins: entry.number_of_cabins,
              rating: entry.rating,
              pax: entry.pax,
              price: entry.price,
            }));

          const names = validData
            .map((entry) => entry.yacht_name)
            .filter(Boolean);
          setYachtNames(names);

          setProducts(validData);
        } else {
          const text = await response.text();
          console.error(
            "Failed to fetch product data. Response status:",
            response.status,
            "Response text:",
            text
          );
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);
  const currentItems = products.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className=" py-6 px-8 space-y-4">
      <Header yachtNames={yachtNames} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={endIndex >= products.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
