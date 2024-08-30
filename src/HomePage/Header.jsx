import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  ThemeProvider,
  useMediaQuery,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { socialMedia, header } from "../HomePage/HomePageData";
import { theme } from "../theme";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("laptop"));
  const isMatchSmall = useMediaQuery(theme.breakpoints.down("tablet"));

  console.log(isMatch);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ marginBottom: "0px" }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#000",
          }}
        >
          {isMatch ? (
            <>
              {isMatchSmall ? (
                <>
                  <Toolbar>
                    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                      <MenuIcon sx={{ color: "#fff", position: "left" }} />
                    </IconButton>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "center",
                        justifyContent: "center",
                        marginLeft: "80px",
                      }}
                    >
                      Perth Studio
                    </Typography>
                    <Drawer
                      open={openDrawer}
                      onClose={() => setOpenDrawer(false)}
                      PaperProps={{
                        sx: {
                          marginTop: "50px",
                          paddingTop: "0px",
                          width: "200px",
                          height: "500px",
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      {header.map((header) => {
                        return (
                          <List>
                            <ListItemButton
                              key={header.title}
                              component={Link}
                              to={header.link}
                              sx={{
                                padding: "8px 16px",
                                margin: "0",
                                minHeight: "40px",
                              }}
                            >
                              <ListItemText
                                sx={{
                                  margin: "0",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {header.title}
                              </ListItemText>
                            </ListItemButton>
                          </List>
                        );
                      })}
                      <List>
                        <ListItemText>
                          {socialMedia.map((socialMedia) => {
                            return (
                              <Typography
                                component="a"
                                href={socialMedia.link}
                                sx={{ marginLeft: "10px" }}
                              >
                                {socialMedia.title}
                              </Typography>
                            );
                          })}
                        </ListItemText>
                      </List>
                    </Drawer>
                  </Toolbar>
                </>
              ) : (
                <>
                  <Toolbar
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr auto",
                    }}
                  >
                    <div>
                      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                        <MenuIcon sx={{ color: "#fff" }} />
                      </IconButton>
                    </div>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "center",
                        marginLeft: "40px",
                      }}
                    >
                      Perth Studio
                    </Typography>
                    <div>
                      {socialMedia.map((socialMedia) => {
                        return (
                          <Typography
                            component="a"
                            href={socialMedia.link}
                            sx={{ marginLeft: "5px" }}
                          >
                            {socialMedia.title}
                          </Typography>
                        );
                      })}
                    </div>
                    <Drawer
                      open={openDrawer}
                      onClose={() => setOpenDrawer(false)}
                      PaperProps={{
                        sx: {
                          marginTop: "50px",
                          width: "200px",
                          height: "450px",
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      {header.map((header) => {
                        return (
                          <List>
                            <ListItemButton
                              key={header.title}
                              component={Link}
                              to={header.link}
                              sx={{
                                padding: "8px 16px",
                                margin: "0",
                                minHeight: "40px",
                              }}
                            >
                              <ListItemText
                                sx={{
                                  margin: "0",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {header.title}
                              </ListItemText>
                            </ListItemButton>
                          </List>
                        );
                      })}
                    </Drawer>
                  </Toolbar>
                </>
              )}
            </>
          ) : (
            <>
              <Toolbar sx={{ justifyContent: "center" }}>
                <Typography
                  variant="h4"
                  sx={{ marginTop: "20px", textAlign: "center" }}
                >
                  Perth Studio
                </Typography>
              </Toolbar>
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <Typography>
                  {socialMedia.map((socialMedia) => {
                    return (
                      <Link
                        to={socialMedia.link}
                        target="_blank"
                        style={{
                          margin: "5px",
                          textDecoration: "none",
                          color: "inherit",
                          gap: "5px",
                        }}
                      >
                        {socialMedia.title}
                      </Link>
                    );
                  })}
                </Typography>
                <Typography
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "15px",
                  }}
                >
                  {header.map((header) => {
                    return (
                      <Link
                        to={header.link}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {header.title}
                      </Link>
                    );
                  })}
                </Typography>

                <Button
                  sx={{
                    color: "#fff",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 8px ",
                  }}
                >
                  ENQUIRE WITH US
                </Button>
              </Toolbar>
            </>
          )}
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
