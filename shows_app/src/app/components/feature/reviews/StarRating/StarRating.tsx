"use client";

import { StarIcon } from "@chakra-ui/icons";
import { HStack, Icon } from "@chakra-ui/react";
import { useState } from "react";

interface IStarRatingProps {
  rating: number;
  onChange: (rating: number) => void;
}

export const StarRating = ({ rating, onChange }: IStarRatingProps) => {
  const [hoverValue, setHoverValue] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  const handleClick = (index: number) => {
    onChange(index);
  };

  return (
    <HStack spacing="1">
      {Array(5)
        .fill("")
        .map((curentStar, index) => {
          const currentIndex = index + 1;
          return (
            <Icon
              as={StarIcon}
              key={index}
              maxWidth={6}
              h={6}
              cursor="pointer"
              color={
                hoverValue >= currentIndex || rating >= currentIndex
                  ? "yellow"
                  : "gray"
              }
              onMouseEnter={() => handleMouseEnter(currentIndex)}
              onClick={() => handleClick(currentIndex)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
    </HStack>
  );
};
