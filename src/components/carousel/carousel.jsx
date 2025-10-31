import React, { useState, useEffect } from "react";
import fasttag1 from "/src/assets/fasttag1.jpg"
import fastag2 from "/src/assets/fasttag2.jpg";
import fastag3 from "/src/assets/fasttag3.jpg";
// import fastag4 from "../assets/fasttag4.jpg"; // Uncomment when available

const FasttagCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      desktopImage: fasttag1,
      mobileImage: fasttag1,
      title: "Quick Fastag Recharge",
      subtitle: "Recharge your FASTag in seconds",
    },
    {
      id: 2,
      desktopImage: fastag2,
      mobileImage: fastag2,
      title: "Multiple Payment Options",
      subtitle: "UPI, Cards, Net Banking & More",
    },
    {
      id: 3,
      desktopImage: fastag3,
      mobileImage: fastag3,
      title: "Instant Activation",
      subtitle: "No Wait Time, Hit The Road Instantly",
    },
    // Uncomment when image available
    // {
    //   id: 4,
    //   desktopImage: fastag4,
    //   mobileImage: fastag4,
    //   title: "24x7 Support",
    //   subtitle: "We're here whenever you need us",
    // },
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full bg-black">
      <div className="relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-700 ${
              index === currentSlide
                ? "opacity-100 relative"
                : "opacity-0 absolute inset-0"
            }`}
          >
            {/* Desktop Image */}
            <picture className="hidden md:block">
              <img
                src={slide.desktopImage}
                alt={slide.title}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "2048/782" }}
              />
            </picture>

            {/* Mobile Image */}
            <picture className="block md:hidden">
              <img
                src={slide.mobileImage}
                alt={slide.title}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "1048/782" }}
              />
            </picture>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-xl">
                  <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white text-lg md:text-xl mb-6">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-white w-8 h-2"
                  : "bg-white/50 hover:bg-white/70 w-2 h-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FasttagCarousel;
