import { Ishows } from "@/app/typings/shows";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

interface IShowDetailsProps {
  show: Ishows;
}

export const ShowsDetails = ({ show }: IShowDetailsProps) => {
  const placeholderImage = "https://fakeimg.pl/600x400/7d3838/909090";

  return (
    <Card width="70%">
      <CardBody w="100%">
        <Image
          objectFit="cover"
          src={show.image_url || placeholderImage}
          alt="tv show poster"
          w="100%"
          h="100%"
          borderRadius={15}
        />
        <Stack mt="6" p="6" spacing="3">
          <Heading size="md" color="#3f117c">
            {show.title}
          </Heading>
          <Text color="3f117c">{show.description}</Text>
          <Text color="#3f117c" fontSize="xl">
            {show.averageRating
              ? ` ${show.averageRating.toFixed(1)}/5`
              : "No ratings"}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
