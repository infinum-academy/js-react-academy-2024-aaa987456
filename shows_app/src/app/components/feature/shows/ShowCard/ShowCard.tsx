import { IShows } from "../../../../typings/shows";
import { StarIcon } from "@chakra-ui/icons";
import { Card, CardBody, Image, Text, Icon, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

export interface IShowCard {
  show: IShows;
}
export const ShowCard = ({ show }: IShowCard) => {
  return (
    <Card
      as={NextLink}
      href={`/all-shows/${show.id}`}
      borderTopRadius="20px"
      borderBottomRadius="20px"
      minWidth="100px"
    >
      <Image
        minHeight="200px"
        height="85%"
        src={show.image_url}
        alt={show.title}
        borderTopRadius="10px"
      />
      <CardBody>
        <Flex direction="column" justifyContent="space-between" height="100%">
          <Text color="brand.200" fontWeight="bold" noOfLines={1}>
            {show.title}
          </Text>
          <Flex alignItems="center">
            <Icon as={StarIcon} color="brand.200" marginRight="1.5" />
            <Text color="brand.200">{show.average_rating}/5</Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
