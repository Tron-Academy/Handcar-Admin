import React from "react";

import SearchBox from "../SearchBox";
import AddButton from "../AddButton";

export default function ProductsHeader() {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-semibold">All Products</h4>
      <div className="flex gap-2 justify-end items-center">
        <SearchBox />
        <AddButton route={"/products/new"} title={"Add Product"} />
      </div>
    </div>
  );
}
