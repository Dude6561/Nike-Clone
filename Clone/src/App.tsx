import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import CustomerReviews from "./sections/CustomerReviews";
import Nav from "./components/Nav";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className=" padding">
        <PopularProducts />
      </section>
      <section className=" padding">
        <SuperQuality />
      </section>
      <section className=" padding-x">
        <Services />
      </section>
      <section className=" padding">
        <SpecialOffer />
      </section>
      <section className=" bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className=" padding-x sm:py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
