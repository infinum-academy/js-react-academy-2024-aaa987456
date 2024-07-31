import { useContext } from "react";
import { ShowContext } from "./ShowsContextProvider";
import { ShowsFinal } from "./ShowsFinal";
import { ShowsStep } from "./ShowsStep";

export const ShowsStepper = () => {
  const { currentStep } = useContext(ShowContext);

  if (currentStep) {
    return <ShowsStep />;
  } else {
    return <ShowsStep />;
  }
};
