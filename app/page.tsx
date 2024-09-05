import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductsGroupList } from "@/components/shared/product-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { PRODUCT_GROUP_PIZZAS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title size='lg' text='Pizza' />
      </Container>
      <TopBar />

      <Container className='mt-10'>
        <div className='flex gap-20'>
          <div className='w-64'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList title='Pizza' items={PRODUCT_GROUP_PIZZAS} categoryId={1} />
              <ProductsGroupList title='Combos' items={PRODUCT_GROUP_PIZZAS} categoryId={2} />
              <ProductsGroupList title='Snacks' items={PRODUCT_GROUP_PIZZAS} categoryId={3} />
              <ProductsGroupList title='Cocktails' items={PRODUCT_GROUP_PIZZAS} categoryId={4} />
              <ProductsGroupList title='Coffee' items={PRODUCT_GROUP_PIZZAS} categoryId={5} />
              <ProductsGroupList title='Drinks' items={PRODUCT_GROUP_PIZZAS} categoryId={6} />
              <ProductsGroupList title='Desserts' items={PRODUCT_GROUP_PIZZAS} categoryId={7} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
