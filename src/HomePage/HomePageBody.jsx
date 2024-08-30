import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import BackgroundImage from "../HomePage/Homepage.png";
import { theme } from "../theme";

function HomePageBody() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "static",
          backgroundImage: `url(${BackgroundImage})`,
          width: "90%",
          height: {
            laptop: "100vh",
            desktop: "100vh",
            tablet: "40vh",
            mobile: "40vh",
          },
          margin: "0px auto 40px auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <p>Body</p>
      </Box>
    </ThemeProvider>
  );
}

export default HomePageBody;
