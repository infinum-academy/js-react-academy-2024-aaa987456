import { Progress } from "@chakra-ui/react";
import { useShowContext } from "./ShowsContextProvider";

export const ShowsProgress = () => {
  const { currentStep } = useShowContext();
  const progress = ((currentStep + 1) / 7) * 100;

  return <Progress value={progress} size="sm" color="brand.300" />;
};
