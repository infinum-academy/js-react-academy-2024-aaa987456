"use client";
import * as React from "react";

import { ChakraProvider, theme } from "@chakra-ui/react";
import { SWRConfig } from "swr";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </SWRConfig>
  );
}
