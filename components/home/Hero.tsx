"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { Movie } from "@/typings";
import { FaStar } from "react-icons/fa";

import getDateFormat from "@/lib/getTimeFormat";
import { Genres } from "@/constants/constants";
import Link from "next/link";

Autoplay.globalOptions = { delay: 8000 };

const Hero = ({ movies }: { movies: Movie[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div ref={emblaRef} className="overflow-hidden relative cursor-pointer">
      <div className="flex">
        {movies.map((movie) => {
          const date = getDateFormat(movie.release_date);

          return (
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <div
                key={movie.id}
                className="flex-full w-screen md:h-screen h-[95vh] relative overflow-hidden"
              >
                <Image
                  key={movie.id}
                  src={getImagePath(movie.backdrop_path, true)}
                  alt={movie.title}
                  fill
                  className="brightness-50 object-cover"
                />

                <div className="w-full h-1/2 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent z-50" />
                <div className="w-full h-full inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 bg-gradient-to-r from-ocean/20 via-transparent to-transparent z-20 md:p-20 p-5 space-y-5 ">
                  <div className="flex space-x-5">
                    <span>{date}</span>
                    <p className="flex space-x-2 items-center font-extralight text-slate-300">
                      <FaStar className="text-ocean" />{" "}
                      <span className="tracking-[2px]">
                        {Math.round(movie.vote_average * 10) / 10} / 10
                      </span>
                    </p>
                  </div>
                  <h2 className="md:text-5xl text-2xl font-bold max-w-xl z-50 ">
                    {movie.title}
                  </h2>
                  <div className="flex space-x-1">
                    {movie.genre_ids.map((id, index) => (
                      <span key={id} className="font-extralight text-slate-300">
                        {" "}
                        {Genres.get(id)}{" "}
                        {index === movie.genre_ids.length - 2
                          ? "& "
                          : index === movie.genre_ids.length - 1
                          ? " "
                          : ", "}{" "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
