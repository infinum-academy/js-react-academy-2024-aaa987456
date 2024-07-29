import { Progress } from "@chakra-ui/react";
import { useShowContext } from "./ShowsContextProvider";

export const ShowsProgress = () => {
  const { currentStep } = useShowContext();
  const progress = (currentStep / 7) * 100;

  console.log("object", currentStep);

  return (
    <Progress
      value={progress}
      backgroundColor="brand.200"
      size="lg"
      width="300px"
      borderRadius="20px"
    />
  );
};
