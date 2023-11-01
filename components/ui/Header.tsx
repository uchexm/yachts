"use client";
import { useState } from "react";
import { Button } from "./button";
import { Search } from "lucide-react";
import yachtData from "@/app/yachtData";

const Header = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  return (
    <header className="flex justify-between py-3 px-4">
      <div className="mx-auto w-full max-w-7xl">
        <p>Results: {yachtData.length} yachts</p>{" "}
        {/* Display the number of items */}
      </div>
      <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
        <div className="flex items-center">
          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="mr-2">
            <Search className="h-6 w-6" />
            <span className="sr-only">Search</span>
          </Button>
          {/* Search Input */}
          <div className="relative">
            <select
              title="sort"
              name="Sort"
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="option1">Sort</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
