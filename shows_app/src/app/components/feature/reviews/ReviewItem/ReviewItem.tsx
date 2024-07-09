import React from "react";
import {
  Box,
  Flex,
  Text,
  Card,
  CardBody,
  Button,
  Icon
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { IReview } from "@/app/typings/reviews";

export interface IReviewItemProps {
  review: IReview;
  onDelete: (review: IReview) => void;
}

export const ReviewItem = ({ review, onDelete }: IReviewItemProps) => {
  const handleDelete = () => {
    onDelete(review);
  };
  return (
    <Card backgroundColor="#5918B0" paddingBottom="8" marginBottom="4">
      <CardBody>
        <Flex alignItems="center" gap={2}>
          <Box>
            <Text fontWeight="bold">{review.email}</Text>
            <Text>{review.comment}</Text>
            <Text> {review.rating}/5</Text>
            <Flex ml="2">
              {Array(review.rating)
                .fill("")
                .map((curentStar, index) => (
                  <Icon key={index} as={StarIcon} color="yellow.400" />
                ))}
            </Flex>
            <Button
              bg="white"
              borderRadius="50px"
              maxW="100px"
              onClick={handleDelete}
            >
              Remove
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
