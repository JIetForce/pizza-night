"use client";

import React, { useState } from "react";

import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui/input";

type Props = {
  title: string;
  items: FilterCheckboxProps[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
};

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  limit = 5,
  searchInputPlaceholder = "Search...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValueValue] = useState("");

  const itemsList = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : items.slice(0, limit);

  return (
    <div className={className}>
      <p className='mb-3 font-bold'>{title}</p>

      {showAll && (
        <div className='mb-5'>
          <Input
            value={searchValue}
            onChange={(e) => setSearchValueValue(e.target.value)}
            placeholder={searchInputPlaceholder}
            className='border-none bg-gray-50'
          />
        </div>
      )}

      <div className='scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2'>
        {itemsList.map((item) => (
          <FilterCheckbox
            onCheckedChange={(id) => console.log(id)}
            checked={false}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "mt-4 border-t border-t-neutral-100" : ""}>
          <button onClick={() => setShowAll(!showAll)} className='mt-3 text-primary'>
            {showAll ? "Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  );
};
