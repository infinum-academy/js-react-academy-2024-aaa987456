import { IShows } from "../../../../typings/shows";
import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Image, Text, Box, Icon, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

export interface IShowCard {
  show: IShows;
}
export const ShowCard = ({ show }: IShowCard) => {
  return (
    <Card as={NextLink} href={`/all-shows/${show.id}`} borderTopRadius="15px">
      <Image
        minHeight="200px"
        maxHeight="80%"
        src={show.image_url}
        alt={show.title}
        borderTopRadius="15px"
      />
      <CardBody>
        <Flex direction="column" justifyContent="space-between" height="100%">
          <Text color="bold.100" fontWeight="bold" noOfLines={2}>
            {show.title}
          </Text>
          <Box>
            <Text>
              <Icon as={StarIcon} color="#3f117c" /> {show.average_rating}/5
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
