"use client";
import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import { themeNew } from "@/theme";
import { ShowsContextProvider } from "./components/feature/stepper/components/ShowsContextProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig>
      <ChakraProvider theme={themeNew}>
        {" "}
        <ShowsContextProvider>{children}</ShowsContextProvider>
      </ChakraProvider>
    </SWRConfig>
  );
}
