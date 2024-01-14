"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Movie } from "@/typings";
import MovieCard from "../MovieCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const CarouselWrapper = ({
  movies,
  title,
}: {
  movies: Movie[];
  title: string;
}) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div className="md:px-20 px-5 space-y-10">
      <h2 className="text-3xl font-bold">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          Autoplay: 8000,
        }}
      >
        <CarouselContent className="-ml-10">
          {movies.map((movie) => (
            <CarouselItem className="lg:basis-1/4 basis-1/2 pl-10 py-5">
              <MovieCard movie={movie} key={movie.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="md:block hidden" />
        <CarouselNext className="md:block hidden" />
      </Carousel>
    </div>
  );
};

export default CarouselWrapper;
