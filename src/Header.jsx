import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  ThemeProvider,
  styled,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../src/theme";
import MenuIcon from "@mui/icons-material/Menu";

const Head = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("mobile")]: {
    color: "#fff",
  },
  [theme.breakpoints.up("tablet")]: {
    color: "#fff",
  },
  [theme.breakpoints.up("laptop")]: {
    color: "#fff",
    height: "8rem",
  },
  [theme.breakpoints.up("desktop")]: {
    color: "#fff",
  },
}));
function Header() {
  const [value, setValue] = useState();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#000" }}>
          <Head>
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}

              <Typography
                variant="h6"
                component="div"
                value={value}
                sx={{ flexGrow: 1 }}
                onClick={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                News
              </Typography>
              <Button
                sx={{
                  color: "#fff",
                  borderRadius: "10%",
                  boxShadow: "0px 4px 8px ",
                }}
              >
                Login sjdsjfnjf
              </Button>
            </Toolbar>
          </Head>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
