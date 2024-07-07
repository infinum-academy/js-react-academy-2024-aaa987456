import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

interface IReviewFormProps {
  addShowReview: (review: { rating: number; comment: string }) => void;
}

export const ReviewForm = ({ addShowReview }: IReviewFormProps) => {
  const [hoverValue, setHoverValue] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addShowReview({ rating, comment });
    setRating(0);
    setComment("");
  };

  const handleMouseEnter = (index: number) => {
    setHoverValue(index);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };

  const handleClick = (index: number) => {
    setRating(index);
  };

  return (
    <Box bg=" #3f117c " borderRadius="md" paddingTop="8" paddingBottom="8">
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormLabel color="white" fontSize="x-large">
            Reviews
          </FormLabel>

          <FormControl>
            <Input
              bg="white"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add review"
            />
          </FormControl>

          <FormControl>
            <Box>
              <Flex alignItems="center" justifyContent="space-bettween">
                <Text mb="2" color="white">
                  Rating
                </Text>
                <HStack spacing="1">
                  {Array(5)
                    .fill("")
                    .map((_, index) => {
                      const currentIndex = index + 1;
                      return (
                        <Icon
                          as={StarIcon}
                          key={index}
                          w={6}
                          h={6}
                          cursor="pointer"
                          color={
                            hoverValue >= currentIndex || rating >= currentIndex
                              ? "yellow"
                              : "gray"
                          }
                          onMouseEnter={() => handleMouseEnter(currentIndex)}
                          onMouseLeave={handleMouseLeave}
                          onClick={() => handleClick(currentIndex)}
                        />
                      );
                    })}
                </HStack>
              </Flex>
            </Box>
          </FormControl>

          <Button type="submit" bg="white" borderRadius="50px" maxW="100px">
            Post
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
function preventDefault() {
  throw new Error("Function not implemented.");
}
