import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title size='lg' text='Pizza' />
      </Container>
      <TopBar />

      <Container className='mt-10'>
        <div className='flex gap-16'>
          <div className='w-64'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>List</div>
          </div>
        </div>
      </Container>
    </>
  );
}
