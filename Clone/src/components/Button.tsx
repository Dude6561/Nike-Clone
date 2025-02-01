import { statistics } from "../constants/constantindex";

type ButtonProps = {
  label: string;
  iconUrl?: string; // The "?" makes iconUrl optional
};

const Button: React.FC<ButtonProps> = ({ label, iconUrl }) => {
  return (
    <section>
      <button className="flex  justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
        {label}
        <img
          src={iconUrl}
          alt="arrow right"
          className=" ml-2 rounded-full w-5 h-5"
        />
      </button>
      <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((item) => (
          <div key={item.label} className="text-3xl font-palanquin font-bold">
            <p className="leading-7 font-montserrat text-slate-gray">
              {item.value}
            </p>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Button;
