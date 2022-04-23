import { createTheme } from "@mui/material";
import { Global, css } from "@emotion/react";
import React from "react";

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: "PT Sans", sans-serif;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
      `}
    />
  );
};
export const theme = createTheme({
  typography: {
    fontFamily: "PT Sans, sans-serif",
  },
});
