import { Cast } from "@/typings";
import getImagePath from "@/lib/getImagePath";
import Image from "next/image";

const MovieCard = ({ cast }: { cast: Cast }) => {
  return (
    <div className="group hover:scale-95 duration-300 ease-out">
      <Image
        src={getImagePath(cast.profile_path)}
        width={1080 / 2}
        height={1920 / 2}
        alt={cast.name}
        className="w-fit lg:min-w-[400px] lg:max-h-[500px] object-cover object-center rounded-lg"
      />
      <p className="text-center group-hover:translate-y-1 -translate-y-10 relative -z-10 opacity-0 group-hover:opacity-100 duration-300 ease-out">
        <span className="text-ocean font-semibold italic">
          {cast.character}{" "}
        </span>{" "}
        <br />
        played by
        <br />
        <span className="text-ocean font-semibold">{cast.name}</span>
      </p>
    </div>
  );
};

export default MovieCard;
