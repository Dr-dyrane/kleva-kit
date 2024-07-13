// src/components/StarRating.jsx

import React from "react";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(fullStars)].map((_, index) => (
        <MdStar key={index} className="text-yellow-500" />
      ))}
      {halfStar && <MdStarHalf className="text-yellow-500" />}
      {[...Array(emptyStars)].map((_, index) => (
        <MdStarBorder key={index} className="text-yellow-500" />
      ))}
    </div>
  );
};

export default StarRating;
