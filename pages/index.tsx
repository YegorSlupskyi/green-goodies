import { useRef } from 'react';
import Acquaintance from '@/components/Acquaintance';
import Events from '@/components/Events/Events';
import OrderForm from '@/components/OrderForm';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Head from 'next/head';
import Desserts from '@/components/Desserts/Desserts';

export default function Home() {

  const orderFormRef = useRef<HTMLElement>();

  return (
    <>
      <Head>
        <title>Green Goodies</title>
        <meta
          name='description'
          content='Green Goodies | Fulfills your sweet desires'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero />
        <WhyUs />
        <Acquaintance />
        <Events />
        <Desserts ref={orderFormRef}/>
        <OrderForm ref={orderFormRef}/>
      </main>
    </>
  );
}
