import React from "react";

import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import { Title } from "./title";
import { Input } from "../ui/input";
import { RangeSlider } from "../ui/range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { INGREDIENTS } from "@/lib/constants";

type Props = {
  className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Filters' size='sm' className='mb-5 font-bold' />

      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='You can customize' value='1' />
        <FilterCheckbox text='New' value='2' />
      </div>

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='mb-3 font-bold'>Price range:</p>
        <div className='mb-5 flex gap-3'>
          <Input type='number' placeholder='0' min={0} max={100} defaultValue={0} />
          <Input type='number' min={1} max={100} placeholder='100' />
        </div>
        <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
      </div>

      <CheckboxFiltersGroup title='Ingredients' className='mt-5' limit={6} items={INGREDIENTS} />
    </div>
  );
};
