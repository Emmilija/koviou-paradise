import { MapPinIcon, ShoppingCartIcon, } from "@heroicons/react/24/outline";

type Stat = {
  value: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const stats: Stat[] = [
  {
    value: "3 km",
    title: "Close to Nikiti",
    description:
      "Only 3 km from Nikiti, giving you quick access to beaches, restaurants, and local attractions.",
    icon: <MapPinIcon className="w-8 h-8 text-primary" />,
  },
  {
    value: "11 km",
    title: "Near Neos Marmaras",
    description:
      "Just 11 km to Neos Marmaras — perfect for dining, shopping, and exploring the vibrant town life.",
    icon: <MapPinIcon className="w-8 h-8 text-primary" />,
  },
  {
    value: "1",
    title: "Only Lidl in Area",
    description:
      "Enjoy the convenience of having the only Lidl supermarket nearby for all your daily essentials.",
    icon: <ShoppingCartIcon className="w-8 h-8 text-primary" />,
  },
  
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-light">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark">
          Why Choose Our Villa
        </h2>
        <p className="mt-2 text-dark/70 mb-12">
          Discover the perfect combination of comfort, location, and modern design for your stay in Sithonia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-lg-soft hover:scale-105 transition-transform flex flex-col items-center text-center"
            >
              

              {/* Value */}
              <h3 className="text-4xl sm:text-5xl flex font-heading font-bold text-primary">
                {stat.value}
          
              </h3>
              <div className="flex flex-row-reverse">
              {/* Icon */}
              <div className="ml-2">{stat.icon}</div>
              {/* Title */}
              <h4 className="mt-2 text-xl font-semibold text-dark">{stat.title}</h4>
      </div>

              {/* Description */}
              <p className="mt-2 text-dark/70 text-sm sm:text-base">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;