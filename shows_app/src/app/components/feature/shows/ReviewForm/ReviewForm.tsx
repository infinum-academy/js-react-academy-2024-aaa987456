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
import { IReview, IReviewContent } from "../../../../typings/reviews";
import { useForm } from "react-hook-form";
import { createReviewM } from "@/fetchers/mutators";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";

export interface IReviewFormProps {
  showId: string;
}

export const ReviewForm = ({ showId }: IReviewFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<IReview>();
  const [rating, setRating] = useState<number>(0);

  const { trigger: createReviewTrigger } = useSWRMutation(
    swrKeys.create,
    createReviewM
  );

  const onSubmit = async (data: IReview) => {
    if (!rating) {
      return;
    }
    const newReview: IReview = {
      ...data,
      show_id: showId,
      rating: rating,
      id: "",
      email: "",
      user: { id: "", email: "", image_url: "" }
    };
    try {
      await createReviewTrigger(newReview);

      mutate(swrKeys.getReviews(showId));
      reset();
      setRating(0);
    } catch (error) {
      console.error("Failed to add review:", error);
    }
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <Box
      backgroundColor="brand.300"
      borderRadius="md"
      paddingTop="8"
      paddingBottom="8"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <Flex justifyContent="space-between">
            <FormLabel color="white" fontSize="headline">
              Reviews
            </FormLabel>

            <FormControl>
              <Input
                {...register("comment")}
                backgroundColor="white"
                type="text"
                placeholder="Add review"
                disabled={isSubmitting}
                minHeight="70px"
                borderRadius="20px"
              />
            </FormControl>
          </Flex>
          <FormControl>
            <Flex alignItems="center" justifyContent="space-between">
              <Flex>
                <Text margin="3" paddingLeft="30%" color="white">
                  Rating
                </Text>
                <StarRating rating={rating} onChange={handleRatingChange} />
              </Flex>
              <Button
                type="submit"
                backgroundColor="white"
                borderRadius="50px"
                maxWidth="150px"
              >
                Post
              </Button>
            </Flex>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};
