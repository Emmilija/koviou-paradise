import { useParams, Link } from "react-router-dom";
import Room1 from "../assets/images/beds desk.webp";
import Room2 from "../assets/images/bedroom desk.webp";
import Room3 from "../assets/images/twobed desk.webp";

type RoomData = {
  title: string;
  description: string;
  price: string;
  images: string[];
};

const rooms: Record<string, RoomData> = {
  studio: {
    title: "3 Bed Studio",
    description:
      "Modern and cozy studio perfect for couples or small groups. Located near Nikiti with easy access to beaches and restaurants.",
    price: "€80 / night",
    images: [Room1, Room2],
  },
  type1: {
    title: "4 Bed Apartment - Type 1",
    description:
      "Spacious apartment ideal for families. Includes kitchen, balcony, and fully equipped living space.",
    price: "€110 / night",
    images: [Room2, Room3],
  },
  type2: {
    title: "4 Bed Apartment - Type 2",
    description:
      "Premium apartment with modern design, extra space, and beautiful interior. Perfect for longer stays.",
    price: "€120 / night",
    images: [Room3, Room1],
  },
};

const RoomDetails = () => {
  const { type } = useParams();
  const room = rooms[type as keyof typeof rooms];

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

      {/* 🔙 Back Button */}
      <Link
        to="/"
        className="text-primary underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* 🏷 Title */}
      <h1 className="text-4xl font-bold mb-4">{room.title}</h1>

      {/* 🖼 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {room.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={room.title}
            className="w-full h-64 object-cover rounded-xl shadow"
          />
        ))}
      </div>

      {/* 📄 Description */}
      <p className="text-dark/80 mb-6 text-lg">
        {room.description}
      </p>

      {/* 💰 Price */}
      <div className="text-2xl font-bold text-primary mb-8">
        {room.price}
      </div>

      {/* 📲 Booking Button */}
      <a
        href={`https://wa.me/38971222701?text=Hi,%20I%20want%20to%20book%20${room.title}`}
        target="_blank"
        className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        Book Now via WhatsApp
      </a>

    </div>
  );
};

export default RoomDetails;