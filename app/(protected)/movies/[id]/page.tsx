import ActionButtons from "@/components/ActionButtons";
import Rating from "@/components/Rating";
import CarouselWrapperCast from "@/components/home/CarouselWrapperCast";
import { fetchById, fetchData } from "@/lib/FetchData";
import getImagePath from "@/lib/getImagePath";
import getDateFormat from "@/lib/getTimeFormat";
import { MovieData, Cast } from "@/typings";
import Image from "next/image";

const page = async ({ params }: { params: { id: number } }) => {
  async function getMovie(): Promise<MovieData> {
    const movie: MovieData = await fetchById(params.id.toString());

    // delay reponse
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return movie;
  }

  const movie = await getMovie();
  const rating = Math.round(movie.vote_average * 10) / 10;

  const castData = await fetchData(`${params.id.toString()}/credits`);
  const cast: Cast[] = castData.cast;

  return (
    <section>
      <div className="p-20 grid grid-cols-4">
        <div className="h-full p-5">
          <Image
            src={getImagePath(movie.poster_path, true)}
            width={1080}
            height={1920}
            alt={movie.title}
            className="rounded-lg"
          />
        </div>
        <div className="h-full col-span-3 p-5">
          <h1 className="text-6xl font-black text-ocean flex justify-between items-center">
            <span>{movie.title.toUpperCase()}</span>
            <span>
              <Rating rating={rating} />
            </span>
          </h1>
          <hr className="my-5" />
          <div className="space-y-5 text-lg">
            <p className="text-slate-300 font-extralight italic">
              {movie.tagline}
            </p>

            <p className="max-w-3xl">
              <span className="font-semibold text-ocean block">Overview</span>
              <span>{movie.overview}</span>
            </p>

            <p className="flex space-x-3">
              <span className="text-ocean font-semibold">Genres: </span>{" "}
              <span className="flex space-x-1">
                {movie.genres.map((g, index) => (
                  <span key={g.id}>
                    {g.name}
                    {index === movie.genres.length - 1 ? " " : ", "}
                  </span>
                ))}
              </span>
            </p>

            <p className="flex space-x-3">
              <span className="text-ocean font-semibold">Release Date: </span>{" "}
              <span>{getDateFormat(movie.release_date)}</span>
            </p>

            <ActionButtons />
          </div>
        </div>
      </div>

      <div>
        <CarouselWrapperCast cast={cast} />
      </div>
    </section>
  );
};

export default page;
