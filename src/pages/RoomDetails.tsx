import { useParams, Link } from "react-router-dom";
import Room1 from "../assets/images/rooms/3-view.jpeg";
import RoomBed from "../assets/images/rooms/3-bedroom.jpeg";
import Room2 from "../assets/images/rooms/4-bunk-terace.jpeg";
import RoomBed2 from '../assets/images/rooms/4-bed-bunk.jpeg';
import RoomBeds2 from '../assets/images/rooms/4-bunk-beds.jpeg';
import Room2View from '../assets/images/rooms/4-bunk-view.jpeg';
import Room2Wc from '../assets/images/rooms/4-bunk-wc.jpeg';
import Room3 from '../assets/images/rooms/4-stand-bed.jpeg';
import Room3Bed from '../assets/images/rooms/4-stand-bedrom.jpeg';
import Room3Beds from '../assets/images/rooms/4-standard-beds.jpeg';
import Room3View from '../assets/images/rooms/4-standard-view.jpeg';
import Room3Bedroom from '../assets/images/rooms/4-stand-bedrom.jpeg';
import { useState } from "react";
type RoomData = {
  title: string;
  description: string;

  images: string[];
};


const rooms: Record<string, RoomData> = {
  studio: {
    title: "3 Bed Studio",
    description:
      "Modern and cozy studio perfect for couples or small groups. Located near Nikiti with easy access to beaches and restaurants.",
  
    images: [Room1, RoomBed],
  },
  type1: {
    title: "4 Bed Apartment - Type 1",
    description:
      "Spacious apartment ideal for families. Includes kitchen, balcony, and fully equipped living space.",

    images: [Room2, RoomBed2, RoomBeds2, Room2View, Room2Wc],
  },
  type2: {
    title: "4 Bed Apartment - Type 2",
    description:
      "Premium apartment with modern design, extra space, and beautiful interior. Perfect for longer stays.",
 
    images: [Room3, Room3Bed, Room3Beds, Room3View, Room3Bedroom],
  },
};

const RoomDetails: React.FC =() => {
  const { type } = useParams();
  const room = rooms[type as keyof typeof rooms];
const [activeIndex, setActiveIndex] = useState<number | null>(null);
  if (!room) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Room not found</h2>
        <Link to="/" className="text-primary underline mt-4 inline-block">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

    
      <Link
        to="/"
        className="text-primary underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

   
      <h1 className="text-4xl font-bold mb-4">{room.title}</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
  {room.images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={room.title}
      onClick={() => setActiveIndex(i)}
      className="w-full h-64 object-cover rounded-xl shadow cursor-pointer hover:scale-[1.02] transition"
    />
  ))}
</div>
{activeIndex !== null && (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

    {/* Close */}
    <button
      onClick={() => setActiveIndex(null)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>

    {/* Left */}
    <button
      onClick={() =>
        setActiveIndex((prev) =>
          prev === 0 ? room.images.length - 1 : (prev as number) - 1
        )
      }
      className="absolute left-6 text-white text-5xl"
    >
      ‹
    </button>

    {/* Image */}
    <img
      src={room.images[activeIndex]}
      className="max-w-[90%] max-h-[85%] object-contain rounded-xl"
      alt="room"
    />

    {/* Right */}
    <button
      onClick={() =>
        setActiveIndex((prev) =>
          prev === room.images.length - 1 ? 0 : (prev as number) + 1
        )
      }
      className="absolute right-6 text-white text-5xl"
    >
      ›
    </button>

  </div>
)}
      <p className="text-dark/80 mb-6 text-lg">
        {room.description}
      </p>


      <a
        href='href="https://www.booking.com/Share-OzhBwU"
'
        target="_blank"
        className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        Book Now
      </a>

    </div>
  );
};

export default RoomDetails;