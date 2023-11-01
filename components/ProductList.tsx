"use client";
import React, { useState } from "react";
import ProductCard from "./ui/ProductCard";
import { Product } from "@/types";

interface ProductListProps {
  items: Product[];
  itemsPerPage: number; // Number of items to display per page
}

const ProductList: React.FC<ProductListProps> = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indexes for the items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, items.length);
  const currentItems = items.slice(startIndex, endIndex);

  // Handle page navigation
  const nextPage = () => {
    if (endIndex < items.length) {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
      <div className="flex justify-between">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={endIndex >= items.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;