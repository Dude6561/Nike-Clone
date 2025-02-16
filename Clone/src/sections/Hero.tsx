import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col min-h-screen justify-center gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center  items-start w-full max:xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red ">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike arrivals, quality comfort and innovation for
          your active life.....
        </p>
        .
        <Button label="Shop Now" iconUrl={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
