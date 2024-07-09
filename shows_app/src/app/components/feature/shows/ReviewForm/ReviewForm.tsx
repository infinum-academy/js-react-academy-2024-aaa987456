import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text
} from "@chakra-ui/react";

import { StarRating } from "../../reviews/StarRating/StarRating";
import { IReviewContent } from "@/app/typings/reviews";


export interface IReviewFormProps {
  addShowReview: (review: IReviewContent) => void;
}
export const ReviewForm = ({ addShowReview }: IReviewFormProps) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const setRatingchange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addShowReview({ rating, comment });
    setRating(0);
    setComment("");
  };

  return (
    <Box
      backgroundColor="brand.100"
      borderRadius="md"
      paddingTop="8"
      paddingBottom="8"
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormLabel color="white" fontSize="x-large">
            Reviews
          </FormLabel>

          <FormControl>
            <Input
              backgroundColor="white"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add review"
            />
          </FormControl>

          <FormControl>
            <Box>
              <Flex alignItems="center" justifyContent="flex-start">
                <Text margin="3" color="white">
                  Rating
                </Text>
                <StarRating rating={rating} onChange={setRatingchange} />
              </Flex>
            </Box>
          </FormControl>

          <Button
            type="submit"
            backgroundColor="white"
            borderRadius="50px"
            maxWidth="100px"
          >
            Post
          </Button>
        </Stack>
      </form>
    </Box>
  );
};