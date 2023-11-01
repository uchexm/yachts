import Image from "next/image";
import Header from "../components/ui/Header";
import ProductList from "@/components/ProductList";
import products from "./yachtData";

export default function Home() {
  return (
    <div className="grid-place-items-center h-screen">
      <Header />
      <ProductList items={products} itemsPerPage={24} />
    </div>
  );
}
