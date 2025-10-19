import React from "react";

export default function Product() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      desc: "High-quality sound with noise cancellation and 20h battery life.",
      price: "$120",
      discount: "20% OFF",
      image: "https://unsplash.com/photos/bunch-of-vegetables-D6Tu_L3chLE",
    },
    {
      id: 2,
      name: "Smart Watch",
      desc: "Track fitness, heart rate, and notifications seamlessly.",
      price: "$180",
      discount: "10% OFF",
      image: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      desc: "Portable speaker with deep bass and waterproof design.",
      price: "$75",
      discount: "30% OFF",
      image: "https://images.unsplash.com/photo-1600180758890-6d4d8f389dc7",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      desc: "RGB lighting and precision tracking for gamers.",
      price: "$50",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1587202372775-98926b65cc95",
    },
    {
      id: 5,
      name: "Laptop Stand",
      desc: "Ergonomic aluminum stand for laptops up to 17 inches.",
      price: "$40",
      discount: "15% OFF",
      image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
    },
    {
      id: 6,
      name: "Wireless Keyboard",
      desc: "Compact and silent keyboard with Bluetooth connectivity.",
      price: "$60",
      discount: "10% OFF",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b1b",
    },
    {
      id: 7,
      name: "Action Camera",
      desc: "Capture 4K videos with waterproof durability.",
      price: "$210",
      discount: "35% OFF",
      image: "https://images.unsplash.com/photo-1508898578281-774ac4893a54",
    },
    {
      id: 8,
      name: "Desk Lamp",
      desc: "Touch control LED lamp with adjustable brightness.",
      price: "$35",
      discount: "5% OFF",
      image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    },
    {
      id: 9,
      name: "Drone Camera",
      desc: "Aerial photography drone with 1080p HD camera.",
      price: "$350",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1581091870622-3f94d56b8f6d",
    },
    {
      id: 10,
      name: "VR Headset",
      desc: "Immersive virtual reality headset for gaming and entertainment.",
      price: "$250",
      discount: "30% OFF",
      image: "https://images.unsplash.com/photo-1573164574231-cc2d7e8d7b90",
    },
  ];

  return (
    <div className="ml-20  min-h-screen bg-gray-50 dark:bg-gray-900 ">
      

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Discount Badge */}
            <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
              {p.discount}
            </span>

            {/* Image */}
            <img
              src={p.image}
              alt={p.name}
              className="h-40 w-full object-cover rounded-t-2xl"
            />

            {/* Content */}
            <div className="p-5">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                {p.name}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {p.desc}
              </p>
              <div className="mt-3 flex justify-between items-center">
                <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {p.price}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
