import React, { useContext } from "react";
import { ShowContext } from "./ShowsContextProvider";
import { Flex, Image, Text } from "@chakra-ui/react";
import { IShows } from "@/app/typings/shows";

export const ShowsStep = () => {
  const {
    currentStep,
    shows,
    setCurrentStep,
    firstRoundWinners,
    setFirstRoundWinners,
    secondRoundWinners,
    setSecondRoundWinners,
    setFinalWinner
  } = useContext(ShowContext);

  const handleSelection = (selectedShow: IShows) => {
    if (currentStep < 4) {
      setFirstRoundWinners([...firstRoundWinners, selectedShow]);
    } else if (currentStep < 6) {
      setSecondRoundWinners([...secondRoundWinners, selectedShow]);
    } else {
      setFinalWinner(selectedShow);
    }
    setCurrentStep(currentStep + 1);
  };

  function getShowsForCurrentStep() {
    if (currentStep < 4) {
      return Array.isArray(shows)
        ? shows.slice(currentStep * 2, currentStep * 2 + 2)
        : [];
    } else if (currentStep < 6) {
      return Array.isArray(firstRoundWinners)
        ? firstRoundWinners.slice(
            (currentStep - 4) * 2,
            (currentStep - 4) * 2 + 2
          )
        : [];
    } else {
      return Array.isArray(secondRoundWinners) ? secondRoundWinners : [];
    }
  }

  const currentShows = getShowsForCurrentStep();

  return (
    <Flex direction="column" alignItems="center">
      <Text textStyle="textRegular" color="white">
        Choose your favorite show
      </Text>
      <Flex>
        {currentShows && currentShows.length > 0 ? (
          currentShows.map((show, index) => (
            <Flex
              direction="column"
              alignItems="center"
              key={index}
              onClick={() => handleSelection(show)}
              margin={4}
              padding={4}
            >
              <Image
                src={show.image_url}
                alt={show.title}
                boxSize="100px"
                objectFit="cover"
                borderRadius="100%"
              />
              <Text textStyle="textBold" color="white">
                {show.title}
              </Text>
            </Flex>
          ))
        ) : (
          <Text color="white">Loading shows...</Text>
        )}
      </Flex>
    </Flex>
  );
};
