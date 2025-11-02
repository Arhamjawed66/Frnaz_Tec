import React, { useEffect, useRef } from "react";

export default function ImageSlider() {
  const sliderRef = useRef(null);

  // Continuous animation using scroll
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      if (!slider) return;
      scrollAmount += 1;
      if (scrollAmount >= slider.scrollWidth / 2) scrollAmount = 0;
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  // Random image list (you can replace URLs)
  const images = [
    "https://picsum.photos/id/1011/600/300",
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1025/600/300",
    "https://picsum.photos/id/1035/600/300",
    "https://picsum.photos/id/1041/600/300",
  ];

  return (
    <div className="overflow-hidden w-full rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <div
        ref={sliderRef}
        className="flex w-max animate-scroll-slow"
        style={{
          display: "flex",
          gap: "1rem",
          scrollBehavior: "smooth",
        }}
      >
        {/* Duplicate images for seamless infinite scroll */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Ad ${index}`}
            className="w-[300px] h-[180px] object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
