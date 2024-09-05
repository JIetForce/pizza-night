"use client";

import { useCategoryStore } from "@/app/store/category";
import { CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

export const Categories: React.FC<Props> = ({ className }) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}>
      {CATEGORIES.map(({ id, name }) => (
        <Link
          key={name}
          className={cn(
            "flex h-11 items-center rounded-2xl px-5 font-bold",
            activeCategoryId === id && "bg-white text-primary shadow-md shadow-gray-200"
          )}
          href={`#${name}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
