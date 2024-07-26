"use client";

import { useContext } from "react";
import { ShowContext } from "./ShowsContextProvider";
import {
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  Box,
  StepTitle,
  StepDescription,
  StepSeparator,
  Button
} from "@chakra-ui/react";

export const ShowsStep = () => {
  const {
    currentStep,
    shows,
    setCurrentStep,
    firstRoundWinners,
    setFirstRoundWinners,
    secondRoundWinners,
    setSecondRoundWinners,
    setFinalWinner,
    selectedShows
  } = useContext(ShowContext);

  const handleSelection = (selectedShows: any) => {
    if (currentStep < 4) {
      setFirstRoundWinners([...firstRoundWinners, selectedShows]);
    } else if (currentStep < 6) {
      setSecondRoundWinners([...secondRoundWinners, selectedShows]);
    } else {
      setFinalWinner(selectedShows);
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <Stepper index={currentStep}>
      {currentShows.map((show, index) => (
        <Step key={index} onClick={() => handleSelection(show)}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{show.title}</StepTitle>
            <StepDescription>{show.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
