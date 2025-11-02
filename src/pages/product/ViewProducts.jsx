import React, { memo } from "react";
import { useTheme } from "../../contexts/ThemeContext"; // ✅ Import global theme
import image1 from "../../assets/productImages/headphone.jpg"
import image2 from "../../assets/productImages/smart-watch.avif"
import image3 from "../../assets/productImages/bluetooth-speaker .jpg"
import image4 from "../../assets/productImages/gaming-mouse.jpg"
import image5 from "../../assets/productImages/wireless-keyboard.jpg"
import image6 from "../../assets/productImages/action-camera.jpg"
import image7 from "../../assets/productImages/desk-lamp.jpg"
import image8 from "../../assets/productImages/drone-camera.jpg"
import image9 from "../../assets/productImages/vR-headset.jpg"


function ProductCard({ p, darkMode }) {
  return (
    <div
      className={`relative rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Discount Badge */}
      <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
        {p.discount}
      </span>

      {/* Image */}
      <img
        src={`${p.image}?auto=format&fit=crop&w=400&q=60`}
        alt={p.name}
        loading="lazy"
        className="h-40 w-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold line-clamp-1">{p.name}</h2>
        <p
          className={`text-sm mt-1 line-clamp-2 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {p.desc}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span
            className={`text-xl font-semibold ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            {p.price}
          </span>
          <button
            className={`text-sm px-3 py-1.5 rounded-lg transition ${
              darkMode
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// 🧠 Optimize each card
const MemoizedProductCard = memo(ProductCard);

export default function Product() {
  const { darkMode } = useTheme(); // ✅ global theme context
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      desc: "High-quality sound with noise cancellation and 20h battery life.",
      price: "$120",
      discount: "20% OFF",
      image: image1,
    },
    {
      id: 2,
      name: "Smart Watch",
      desc: "Track fitness, heart rate, and notifications seamlessly.",
      price: "$180",
      discount: "10% OFF",
      image: image2,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      desc: "Portable speaker with deep bass and waterproof design.",
      price: "$75",
      discount: "30% OFF",
      image: image3,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      desc: "RGB lighting and precision tracking for gamers.",
      price: "$50",
      discount: "25% OFF",
      image: image4,
    },
    {
      id: 6,
      name: "Wireless Keyboard",
      desc: "Compact and silent keyboard with Bluetooth connectivity.",
      price: "$60",
      discount: "10% OFF",
      image: image5,
    },
    {
      id: 7,
      name: "Action Camera",
      desc: "Capture 4K videos with waterproof durability.",
      price: "$210",
      discount: "35% OFF",
      image: image6,
    },
    {
      id: 8,
      name: "Desk Lamp",
      desc: "Touch control LED lamp with adjustable brightness.",
      price: "$35",
      discount: "5% OFF",
      image: image7,
    },
    {
      id: 9,
      name: "Drone Camera",
      desc: "Aerial photography drone with 1080p HD camera.",
      price: "$350",
      discount: "40% OFF",
      image: image8,
    },
    {
      id: 10,
      name: "VR Headset",
      desc: "Immersive virtual reality headset for gaming and entertainment.",
      price: "$250",
      discount: "30% OFF",
      image: image9,
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <MemoizedProductCard key={p.id} p={p} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}
