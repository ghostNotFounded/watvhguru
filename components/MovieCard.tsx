import { Movie } from "@/typings";
import getImagePath from "@/lib/getImagePath";
import Image from "next/image";
import getDateFormat from "@/lib/getTimeFormat";
import Link from "next/link";
import Rating from "./Rating";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link href={`/movies/${movie.id}`}>
      <div className="border relative flex-shrink-0 cursor-pointer hover:scale-90 duration-300 ease-out group ">
        <div className="absolute left-5 top-5 -z-50 translate-y-0 group-hover:-translate-y-12 opacity-0 group-hover:opacity-100 duration-300">
          <Rating
            rating={Math.round(movie.vote_average * 10) / 10}
            solid={true}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/15 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-20" />
        <p className="absolute font-bold bottom-5 opacity-0 group-hover:opacity-100 duration-300 group-hover:translate-y-[3rem] ease-out line-clamp-1 -z-10">
          {movie.title}
        </p>
        <p className="absolute font-extralight bottom-5 opacity-0 group-hover:opacity-100 duration-300 group-hover:translate-y-16 ease-out line-clamp-1 -z-10">
          {getDateFormat(movie.release_date)}
        </p>

        <div className="w-full h-full overflow-hidden">
          <Image
            className="w-fit lg:min-w-[400px] lg:min-h-[500px] object-cover object-center"
            src={getImagePath(movie.poster_path)}
            alt={movie.title}
            width={1080}
            height={1920}
            key={movie.id}
          />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
