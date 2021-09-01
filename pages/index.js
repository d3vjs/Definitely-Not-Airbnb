import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import { data } from '../demo-call'
import { livingData } from '../cards-demo-call'
import MediumCard from '../components/MediumCard'
import Hosting from '../components/Hosting'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>DN Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(item => (
              <SmallCard
                key={item.key}
                image={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="grid grid-cols-80p grid-rows-one mt-0 -mb-6 p-6
          -mx-6 overflow-x-scroll sm:grid-cols-4 sm:gap-6 sm:p-3 sm:-ml-3 sm:space-x-3 sm:scrollbar-hide">
            {cardsData?.map(item => (
              <MediumCard key={item.id} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <section className="relative py-16">
          <Hosting className="relative py-16" />
        </section>

      </main>
        <Footer className="flex justify-center"/>
    </div>
  )
}

export async function getStaticProps() {
  // Simulating the API call for possible future use
  const exploreData = data;
  const cardsData = livingData;

  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData
    }
  };
}