import React, { createContext, ReactNode, useContext, useState } from "react";
import { IShowCard } from "../../shows/ShowCard/ShowCard";
import { IShows } from "@/app/typings/shows";
import { fetcher } from "@/fetchers/fetchers";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR from "swr";

interface IShowContext {
  currentStep: number;
  setCurrentStep: (newStep: number) => void;
  shows?: Array<IShows>;
  selectedShows: Array<IShows>;
  setSelectedShows: (newShows: Array<IShows>) => void;
  firstRoundWinners: Array<IShows>;
  setFirstRoundWinners: (winners: Array<IShows>) => void;
  secondRoundWinners: Array<IShows>;
  setSecondRoundWinners: (winners: Array<IShows>) => void;
  finalWinner?: IShows;
  setFinalWinner: (winner: IShows) => void;
}

export const ShowContext = createContext<IShowContext>({} as IShowContext);

interface IShowsContextProviderProps {
  children: ReactNode;
}

export const ShowsContextProvider = ({
  children
}: IShowsContextProviderProps) => {
  const { data: shows } = useSWR<Array<IShows>>(swrKeys.ShowsAllApi, fetcher);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedShows, setSelectedShows] = useState<Array<IShows>>([]);
  const [firstRoundWinners, setFirstRoundWinners] = useState<Array<IShows>>([]);
  const [secondRoundWinners, setSecondRoundWinners] = useState<Array<IShows>>(
    []
  );
  const [finalWinner, setFinalWinner] = useState<IShows | undefined>(undefined);

  return (
    <ShowContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        shows,
        selectedShows,
        setSelectedShows,
        firstRoundWinners,
        setFirstRoundWinners,
        secondRoundWinners,
        setSecondRoundWinners,
        finalWinner,
        setFinalWinner
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export const useShowContext = () => useContext(ShowContext);
