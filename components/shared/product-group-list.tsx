"use client";

import React, { useEffect, useRef } from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/app/store/category";

type Props = {
  title: string;
  items: any[];
  className?: string;
  categoryId: number;
};

export const ProductsGroupList: React.FC<Props> = ({ title, items, className, categoryId }) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title);

      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div ref={intersectionRef} className={className} id={title}>
      <Title text={title} size='lg' className='mb-5 font-extrabold' />
      <div className='grid grid-cols-3 gap-[50px]'>
        {items.map(({ id, name, price, count, imageUrl }) => (
          <ProductCard key={id} name={name} imageUrl={imageUrl} price={price} count={count} />
        ))}
      </div>
    </div>
  );
};
