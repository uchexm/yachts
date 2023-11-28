import React from "react";
import { Button } from "./button";
import { Search } from "lucide-react";

interface HeaderProps {
  yachtNames: string[];
}

const Header: React.FC<HeaderProps> = ({ yachtNames }) => {
  const totalCount = yachtNames.length;

  return (
    <header className="flex justify-between py-3 px-4">
      <div className="mx-auto w-full max-w-7xl">
        <p className="ml-4 font-semibold text-lg">
          Results: {totalCount} yachts
        </p>
      </div>
      <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2">
            <Search className="h-6 w-6" />
            <span className="sr-only">Search</span>
          </Button>

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
