import React from "react";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="grid-place-items-center h-screen">
      <ProductList itemsPerPage={24} />
    </div>
  );
}
