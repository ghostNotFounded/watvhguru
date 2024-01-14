"use client";

import { Circle } from "rc-progress";

interface RatingProps {
  rating: number;
  solid?: boolean;
}

const Rating = ({ rating, solid }: RatingProps) => {
  return (
    <div className="flex items-center justify-center">
      <Circle
        percent={rating * 10}
        strokeWidth={5}
        strokeColor={
          rating < 5 ? "#FF0000" : rating < 7 ? "#FFA500" : "#48cae4"
        }
        className={`absolute w-[60px] h-[60px] ${
          solid ? "bg-ocean rounded-full -z-10" : ""
        }`}
      />
      <p
        className={`font-light text-lg ${
          solid
            ? "text-white font-semibold"
            : rating < 5
            ? "text-[#FF0000]"
            : rating < 7
            ? "text-[#FFA500]"
            : "text-[#48cae4]"
        }`}
      >
        {rating}
      </p>
    </div>
  );
};

export default Rating;
