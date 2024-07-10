import { Ishows } from "@/app/typings/shows";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { AverageRatingDisplay } from "../reviews/AverageRating";


interface IShowDetailsProps {
  show: Ishows;
  averageRating: number;
}

export const ShowsDetails = ({ show ,averageRating}: IShowDetailsProps) => {
  
  const placeholderImage = "https://fakeimg.pl/600x400/7d3838/909090";

  
  return (
    <Card width="100%">
      <CardBody width="100%">
        <Image
          objectFit="cover"
          src={show.image_url || placeholderImage}
          alt="tv show poster"
          width="100%"
          height="100%"
          borderRadius={15}
        />
        <Stack marginLeft="6" padding="6" spacing="3">
          <Heading size="md" color="#3f117c">
            {show.title}
          </Heading>
          <Text color="3f117c">{show.description}</Text>
          <AverageRatingDisplay averageRating={averageRating}/>
        </Stack>
      </CardBody>
    </Card>
  );
};
