"use client";

import { Button } from "@/components/ui/button"
import MainHeader from "@/components/common/MainHeader";
import {categories} from "@/data/categories";
import { products } from "@/data/products";
import {useState} from "react";

export default function Home() {

  const [search, setSearch] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);


  const handleSearch = (value: string) => {
    setSearch(value);
  }

  const handleCategory = (value: string) => {
    setCategory(value);
  }

  console.log(`PAGE:SEARCH: => ${search}`);
  if (category !== null)
  {
      console.log(`PAGE:CATEGORY: => ${categories.find(x => x.value === parseInt(category))?.name}`);
  }

  const pr = JSON.stringify(products);
  console.log(pr);

  return (
      <div>
          <MainHeader
            onSearch={handleSearch}
            onCategorySelected={handleCategory}/>
      </div>

  )
}