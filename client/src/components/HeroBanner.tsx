
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import collageImg from '@assets/generated_images/happy_kids_fashion_collage_poster.png';
import fashionCollage from '@assets/generated_images/indian_kids_fashion_collage_poster.png';
import ethnicCollage from '@assets/generated_images/indian_kids_ethnic_wear_collage_poster.png';
import maternityCollage from '@assets/generated_images/indian_maternity_mom_and_baby_collage_poster.png';

const slides = [
  {
    id: 1,
    image: collageImg, 
    alt: "Fashion Collage",
    title: "Mega Fashion Sale",
    subtitle: "Up to 70% OFF on Kids Wear",
    cta: "Shop Now"
  },
  {
    id: 2,
    image: fashionCollage,
    alt: "The Big Fashion Sale",
    title: "Trendy Collections",
    subtitle: "New Arrivals for Your Little Ones",
    cta: "Explore"
  },
  {
    id: 3,
    image: ethnicCollage,
    alt: "Ethnic Collection",
    title: "Festive Special",
    subtitle: "Traditional Wear Starting ₹299",
    cta: "Browse"
  },
  {
     id: 4,
     image: maternityCollage,
     alt: "Mom & Baby Care",
     title: "Mom & Baby Essentials",
     subtitle: "Everything You Need in One Place",
     cta: "Discover"
  }
];

export function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    onSelect();
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative group bg-gray-100 overflow-hidden w-full max-w-[1400px] mx-auto my-4 rounded-xl shadow-lg">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex w-full touch-pan-y">
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="flex-[0_0_100%] min-w-0 relative"
            >
              {/* Container with proper aspect ratio */}
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                {/* Image with zoom effect on hover */}
                <div className="absolute inset-0 transform transition-transform duration-[2000ms] ease-out group-hover:scale-110">
                  <img 
                    src={slide.image} 
                    alt={slide.alt}
                    loading={slide.id === 1 ? "eager" : "lazy"}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                
                {/* Content Overlay - Responsive positioning */}
                <div className="absolute inset-0 flex items-center px-4 sm:px-8 md:px-12 lg:px-16">
                  <div className="max-w-xl transform transition-all duration-700 translate-x-0 opacity-100">
                    <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 md:mb-4 drop-shadow-2xl animate-fade-in-up">
                      {slide.title}
                    </h2>
                    <p className="text-white/90 font-medium text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-4 md:mb-6 drop-shadow-lg animate-fade-in-up animation-delay-200">
                      {slide.subtitle}
                    </p>
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up animation-delay-400">
                      {slide.cta} →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
      <button 
        onClick={scrollPrev}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 z-20 items-center justify-center backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button 
        onClick={scrollNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 z-20 items-center justify-center backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Progress Dots - Responsive size */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {slides.map((_, index) => (
           <button 
             key={index}
             onClick={() => emblaApi?.scrollTo(index)}
             className={`transition-all duration-300 rounded-full ${
               index === selectedIndex 
                 ? 'bg-white w-6 sm:w-8 h-2 sm:h-2.5' 
                 : 'bg-white/60 hover:bg-white/80 w-2 sm:w-2.5 h-2 sm:h-2.5'
             }`}
             aria-label={`Go to slide ${index + 1}`}
           />
        ))}
      </div>
    </div>
  );
}
