import Acquaintance from '@/components/Acquaintance';
import Events from '@/components/Events/Events';
import OrderForm from '@/components/Form';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Head from 'next/head';

export default function Home() {
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
        <OrderForm/>
      </main>
    </>
  );
}
