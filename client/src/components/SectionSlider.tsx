import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SectionSliderProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  viewAllLink?: string;
}

export function SectionSlider({ title, subtitle, children, viewAllLink }: SectionSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    containScroll: 'trimSnaps'
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="max-w-[1400px] mx-auto px-3 md:px-4 py-6 md:py-8 relative group">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 border-b border-gray-200 pb-3 md:pb-4">
        <div className="mb-3 md:mb-0">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 uppercase tracking-wider">{title}</h2>
            {subtitle && <p className="text-[10px] md:text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <Button variant="outline" className="text-[9px] md:text-xs font-bold uppercase hover:bg-primary hover:text-white transition-colors h-7 md:h-8 border-gray-300 w-full md:w-auto">View All</Button>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 py-2">
            {React.Children.map(children, (child) => (
              <div className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_20%] min-w-0 pl-1">
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={scrollPrev}
          className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-gray-600 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all disabled:opacity-0 z-10 hover:text-primary hover:border-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={scrollNext}
          className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-gray-600 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all disabled:opacity-0 z-10 hover:text-primary hover:border-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
