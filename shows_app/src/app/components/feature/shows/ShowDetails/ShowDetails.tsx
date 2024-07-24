"use client";

import { IShows } from "../../../../typings/shows";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Box,
  Spinner
} from "@chakra-ui/react";
import { AverageRatingDisplay } from "../../reviews/AverageRating";

interface IShowDetailsProps {
  show: IShows;
  averageRating: number;
}

export const ShowDetails = ({ show, averageRating }: IShowDetailsProps) => {
  const placeholderImage = "https://fakeimg.pl/1000x800/7d3838/909090";

  return (
    <Card borderTopRadius="20px" maxWidth="1053px">
      <Image
        src={show.image_url || placeholderImage}
        alt="tv show poster"
        width="100%"
        maxHeight="500px"
        borderTopRadius="19px"
        objectFit="cover"
      />
      <CardBody>
        <Stack marginLeft="6" padding="6" spacing="3">
          <Heading size="md" color="#3f117c">
            {show.title}
          </Heading>
          <Text color="#3f117c">{show.description}</Text>
          console.log(show.description);
          <AverageRatingDisplay averageRating={averageRating} />
        </Stack>
      </CardBody>
    </Card>
  );
};
