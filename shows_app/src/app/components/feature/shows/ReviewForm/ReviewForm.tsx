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
import { IReviewContent } from "../../../../typings/reviews";
import { useForm } from "react-hook-form";

export interface IReviewFormProps {
  addShowReview: (review: IReviewContent) => void;
}

export const ReviewForm = ({ addShowReview }: IReviewFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<IReviewContent>();
  const [rating, setRating] = useState<number>(0);

  const onSubmit = (data: IReviewContent) => {
    addShowReview({ ...data, rating });
    reset();
    setRating(0);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <Box
      backgroundColor="brand.100"
      borderRadius="md"
      paddingTop="8"
      paddingBottom="8"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <FormLabel color="white" fontSize="x-large">
            Reviews
          </FormLabel>

          <FormControl>
            <Input
              {...register("comment")}
              backgroundColor="white"
              type="text"
              placeholder="Add review"
              disabled={isSubmitting}
            />
          </FormControl>

          <FormControl>
            <Flex alignItems="center" justifyContent="flex-start">
              <Text margin="3" color="white">
                Rating
              </Text>
              <StarRating rating={rating} onChange={handleRatingChange} />
            </Flex>
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
