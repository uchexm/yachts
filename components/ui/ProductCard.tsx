"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Bed, Star, Users, Heart } from "lucide-react";

import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(true);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      href="/"
      className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"
    >
      <Card className="rounded-lg border-2">
        <CardContent className="pt-4">
          <div className="aspect-square relative bg-foreground/5 rounded-lg">
            <Image
              src={`https://picsum.photos/seed/picsum/200/300`}
              alt="Yacht"
              fill
              loading="lazy"
              className="aspect-square object-cover rounded-lg transition-all duration-300 hover:scale-105"
            />
            {isFavorite && (
              <div className="absolute top-2 right-2 text-white-500">
                <Heart size={32} />
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-start justify-between">
          <div>
            <p className="font-semibold text-lg">
              Yacht Name: {data.yacht_name}
            </p>
            <p className="text-sm text-primary/80">
              Manufacturer: {data.manufacturer}
            </p>
            <p className="text-sm text-primary/80">
              Year Built: {data.year_built}
            </p>
            <p className="text-sm text-primary/80">Length: {data.length}</p>
            <p className="text-sm text-primary/80">
              Fuel Type: {data.fuel_type}
            </p>
            <p className="text-sm text-primary/80">
              <Bed style={{ color: "green" }} /> Number of Cabins:{" "}
              {data.number_of_cabins}
            </p>
            <p className="text-sm text-primary/80">
              <Star /> Rating: {data.rating}
            </p>
            <p className="text-sm text-primary/80">
              <Users style={{ color: "green" }} /> Pax: {data.pax}
            </p>
            <div className="flex items-center justify-between">
              Price: R{data?.price}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
