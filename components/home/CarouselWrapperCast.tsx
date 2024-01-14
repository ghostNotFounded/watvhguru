"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Cast, Movie } from "@/typings";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import CastCard from "../CastCard";

const CarouselWrapperCast = ({ cast }: { cast: Cast[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div className="md:px-20 px-5 space-y-10">
      <h2 className="text-3xl font-bold text-ocean">Cast</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          Autoplay: 8000,
        }}
      >
        <CarouselContent className="-ml-10">
          {cast.map((cast) => (
            <CarouselItem className="lg:basis-1/4 basis basis-1/2 pl-10 py-5">
              <CastCard cast={cast} key={cast.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:block hidden" />
        <CarouselNext className="md:block hidden" />
      </Carousel>
    </div>
  );
};

export default CarouselWrapperCast;
