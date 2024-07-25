import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fontSizes: {
    headline: {
      base: "24pt", // Mobile
      md: "40pt" // Desktop
    },
    titleRegular: {
      base: "24pt",
      md: "24pt"
    },
    titleBold: {
      base: "24pt",
      md: "24pt"
    },
    bodyRegular: {
      base: "14pt",
      md: "20pt"
    },
    bodyBold: {
      base: "14pt",
      md: "20pt"
    },
    subtitleRegular: {
      base: "18pt",
      md: "18pt"
    },
    subtitleBold: {
      base: "18pt",
      md: "18pt"
    },
    smallCaptionRegular: {
      base: "14pt",
      md: "16pt"
    },
    smallCaptionBold: {
      base: "14pt",
      md: "16pt"
    },
    button: {
      base: "14pt",
      md: "14pt"
    },
    note: {
      base: "12pt",
      md: "12pt"
    }
  },
  fontWeights: {
    bold: 700,
    regular: 400
  },
  textStyles: {
    headline: {
      fontSize: ["24pt", "40pt"],
      fontWeight: "bold",
      lineHeight: ["32pt", "52pt"]
    },
    titleRegular: {
      fontSize: ["24pt", "24pt"],
      fontWeight: "regular",
      lineHeight: ["32pt", "32pt"]
    },
    titleBold: {
      fontSize: ["24pt", "24pt"],
      fontWeight: "bold",
      lineHeight: ["32pt", "32pt"]
    },
    bodyRegular: {
      fontSize: ["14pt", "20pt"],
      fontWeight: "regular",
      lineHeight: ["20pt", "30pt"]
    },
    bodyBold: {
      fontSize: ["14pt", "20pt"],
      fontWeight: "bold",
      lineHeight: ["20pt", "30pt"]
    },
    subtitleRegular: {
      fontSize: ["18pt", "18pt"],
      fontWeight: "regular",
      lineHeight: ["24pt", "24pt"]
    },
    subtitleBold: {
      fontSize: ["18pt", "18pt"],
      fontWeight: "bold",
      lineHeight: ["24pt", "24pt"]
    },
    smallCaptionRegular: {
      fontSize: ["14pt", "16pt"],
      fontWeight: "regular",
      lineHeight: ["20pt", "22pt"]
    },
    smallCaptionBold: {
      fontSize: ["14pt", "16pt"],
      fontWeight: "bold",
      lineHeight: ["20pt", "22pt"]
    },
    button: {
      fontSize: ["14pt", "14pt"],
      fontWeight: "bold",
      lineHeight: ["20pt", "20pt"]
    },
    note: {
      fontSize: ["12pt", "12pt"],
      fontWeight: "regular",
      lineHeight: ["18pt", "18pt"]
    }
  },
  colors: {
    brand: {
      100: "#8D5CE5",
      200: "#371687",
      300: "#1B004C",
      400: "#FF2498"
    }
  }
});
