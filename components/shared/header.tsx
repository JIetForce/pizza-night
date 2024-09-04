import React from "react";
import Image from "next/image";

import { Container } from "./container";
import { Button } from "../ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border-b border-gray-100", className)}>
      <Container className='flex items-center justify-between py-8'>
        <div className='flex items-center gap-4'>
          <Image src='/logo.png' width={35} height={35} alt='Logo' />
          <div>
            <h1 className='text-2xl font-black uppercase'>Pizza Night</h1>
            <p className='text-sm leading-3 text-gray-400'>Time for Pizza</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-1'>
            {" "}
            <User size={16} />
            Login
          </Button>

          <div>
            <Button className='group relative'>
              <b>10$</b>
              <span className='mx-3 h-full w-[1px] bg-white/30' />
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart className='relative h-4 w-4' strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className='absolute right-5 w-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100' />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
