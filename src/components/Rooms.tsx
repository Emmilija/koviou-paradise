import Room1 from "../assets/images/3-bed.jpg";
import Room2 from "../assets/images/bedroom desk.webp";
import Room3 from "../assets/images/twobed desk.webp";
import { Link } from "react-router-dom";

type Room = {
  value: string;
  title: string;
  image: string;
  path: string;
};

const stats: Room[] = [
  {
    value: "3 Bed Studio",
    title: "Studio",
    image: Room1,
    path: "/rooms/studio",
  },
  {
    value: "4 Bed Apartment",
    title: "Bunk Beds",
    image: Room2,
    path: "/rooms/type1",
  },
  {
    value: "4 Bed Apartment",
    title: "Standard Beds",

    image: Room3,
    path: "/rooms/type2",
  },
];

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-20 px-6 bg-light">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-footer">
          Choose Your Stay
        </h2>
        <p className="text-dark/70 mt-2">
          Select the perfect room for your vacation in Sithonia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {stats.map((room, idx) => (
          <Link key={idx} to={room.path}>
            
            <div className="relative group h-[420px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">

         
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              
              <div className="absolute bottom-0 p-6 text-left text-white">
                <h3 className="text-2xl font-bold">{room.value}</h3>
                <p className="text-white/80">{room.title}</p>

                <div className="mt-4 inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold">
                  View Details →
                </div>
              </div>

            </div>

          </Link>
        ))}

      </div>
    </section>
  );
};

export default Rooms;