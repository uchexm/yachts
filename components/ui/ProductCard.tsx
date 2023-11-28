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
          <div className="w-full">
            <div className="flex items-center justify-between w-full">
              <p className="font-semibold text-lg">
                Yacht Name: {data.yacht_name}
              </p>
              {isFavorite && (
                <>
                  <div className="flex justify-end">
                    <Users style={{ marginLeft: "0.5rem", color: "green" }} />
                    <span>{data.pax}</span>

                    <Bed style={{ marginLeft: "0.5rem", color: "green" }} />
                    <span>{data.number_of_cabins}</span>
                  </div>
                </>
              )}
            </div>
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

            <div className="flex items-center justify-between w-full">
              <p>
                From
                <span className="font-semibold text-lg"> ${data.price}</span> /
                week
              </p>
              <div className="flex justify-end">
                <Star style={{ marginLeft: "0.5rem" }} />
                <span>{data.rating}</span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
