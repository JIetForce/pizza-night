import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { CountButton } from "./count-button";

type Props = {
  name: string;
  price: number;
  count?: number;
  imageUrl?: string;
  className?: string;
};

export const ProductCard: React.FC<Props> = ({ name, price, count, imageUrl, className }) => {
  return (
    <div className={cn(className)}>
      <div className='flex h-[260px] justify-center rounded-lg bg-secondary p-6'>
        <img className='h-[215px] w-[215px]' src={imageUrl} alt='Logo' />
      </div>
      <Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
      <p className='text-sm text-gray-400'>
        Chicken meat, Mozzarella, Cheddar cheese, Parmesan cheese, Sauce, Tomatoes, Alfredo
      </p>

      <div className='mt-4 flex items-center justify-between'>
        <span className='text-[20px]'>
          from <b>{price} $</b>
        </span>

        {count ? (
          <CountButton value={count} size='lg' />
        ) : (
          <Button variant='secondary'>
            <Plus className='mr-1 h-4 w-4' />
            Add
          </Button>
        )}
      </div>
    </div>
  );
};
