"use client"

import Image from "next/image";
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categories } from "@/data/categories";
import {ChangeEvent, useState} from "react";

interface MainHeaderProps {
    onSearch: (value: string) => void;
    onCategorySelected: (value: string) => void;
}

function MainHeader ( { onSearch, onCategorySelected } : MainHeaderProps ) {

    const [search, setSearch] = useState<string>("");
    const [category, setCategory] = useState<string>("0");

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        onSearch(e.target.value)
    }

    const handleCategory = (value: string) => {
        setCategory(value);
        onCategorySelected(value);
    }

    return (
       <div className="fixed w-full flex items-center justify-between border-b p-4">
           <Image
               src="/allegro.png"
               alt="allegro-logo"
               width={125}
               height={75}/>
           <div className="flex items-center">
               <Input
                   value={search}
                   onChange={handleSearch}
                   placeholder="czego szukasz?"
                   className="border-black rounded-none w-[400px]
                   outline-none active:outline-none
                   focus:outline-none"/>
               <Select value={category} onValueChange={handleCategory}>
                   <SelectTrigger
                       className="w-[200px]
                       border-black
                       rounded-none border-l-0 border-r-0">
                       <SelectValue/>
                   </SelectTrigger>
                   <SelectContent>
                       {categories.map(c => (
                           <SelectItem key={c.value} value={c.value.toString()}>{c.name}</SelectItem>
                       ))}
                   </SelectContent>
               </Select>
               <Button
                   className="bg-orange-600
                   text-white hover:bg-orange-500
                   rounded-none min-w-[100px]">SZUKAJ</Button>
           </div>
           <Button size="sm"
                   className="bg-orange-600 text-white hover:bg-orange-500">Logowanie</Button>
       </div>
    )
}

export default MainHeader;