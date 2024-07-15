import { IShows } from "../../../../typings/shows";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Flex
} from "@chakra-ui/react";
import { AverageRatingDisplay } from "../../reviews/AverageRating";

interface IShowDetailsProps {
  show: IShows;
  averageRating: number;
}

export const ShowDetails = ({ show, averageRating }: IShowDetailsProps) => {
  const placeholderImage = "https://fakeimg.pl/1000x800/7d3838/909090";

  return (
    <Card maxHeight="800px">
      <CardBody>
        <Image
          src={show.image_url || placeholderImage}
          alt="tv show poster"
          width="100%"
          maxHeight="500px"
          borderRadius={15}
        />
        <Stack marginLeft="6" padding="6" spacing="3">
          <Heading size="md" color="#3f117c">
            {show.title}
          </Heading>
          <Text color="#3f117c">{show.description}</Text>
          <AverageRatingDisplay averageRating={averageRating} />
        </Stack>
      </CardBody>
    </Card>
  );
};
