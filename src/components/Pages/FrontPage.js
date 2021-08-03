import React from "react";
import {
  Button,
  Box,
  Typography,
  IconButton,
  Fab,
  Hidden,
  makeStyles,
} from "@material-ui/core";

import theme from "../../theme/theme";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useTranslation } from 'react-i18next';

const FrontPage = () => {
  const [ t, i18n ] = useTranslation("global");
  const useStyles = makeStyles({
    background: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundImage: "linear-gradient(135deg,#ff2300,#a100cd)",
      width: "100%",
      height: "90vh",
      //backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "scroll",
      backgroundSize: "cover",
      [theme.breakpoints.down("xs")]: {
        backgroundColor: "black",
        backgroundPosition: "left center",
        backgroundAttachment: "scroll",
      },
    },
    name: {
      position: "relative",
      margin: "0.5rem 1rem",
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        fontSize: "3.4rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "5rem",
      },
    },
    topText: {
      position: "relative",
      margin: "0 1.4rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "4rem",
      },
    },
    bottomText: {
      position: "relative",
      margin: "0 1.4rem",
      fontSize: "2.1rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.4rem",
      },
    },
    button: {
      maxWidth: "400px",
      position: "relative",
      fontSize: "1.75rem",
      marginLeft: "8rem",
      color: "white",
      boxShadow: "4px 4px 3px black",
      '&:hover': {
        color: "yellow",
        boxShadow: 'none',
      },
      [theme.breakpoints.down("xs")]: {
        maxWidth: "15rem",

        marginLeft: "2rem",

        fontSize: "1rem",
      },
    },
    backToTopButton: {
      position: "fixed",
      bottom: "0",
      right: "0",
      margin: "1rem",
      zIndex: "99999",
    },
    backToTopButtonMobile: {
      margin: "0.8rem",
      marginBottom: "3rem",
    },
    titular: {
      paddingLeft: "7rem",
      color: "white",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "1rem",
        color: "white",
      },
    }
  });
  const classes = useStyles();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className={classes.background} id="Top">
      <Box className={classes.titular}>

        <Typography className={classes.topText} variant="h3" >
          {t("front.hello")}
        </Typography>
        <Typography className={classes.topText} variant="h3" >
          Martín Cavanagh,
        </Typography>
        <Typography className={classes.name} variant="h3" >
          Fullstack Web Developer.
        </Typography>
      </Box>
      <Button
        variant="outlined"
        className={classes.button}
        aria-label="Scroll Down"
        onClick={() => scrollTo("AboutMe")}
      >
          {t("front.saberbtn")}
      </Button>
      {/* <Hidden xsDown>
        <Fab
          className={classes.backToTopButton}
          variant="extended"
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("navBar")}
        >
          <KeyboardArrowUpIcon />
          Back to Top
        </Fab>
      </Hidden>
      <Hidden smUp>
        <Fab
          className={`${classes.backToTopButton} ${classes.backToTopButtonMobile}`}
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("Top")}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Hidden> */}
    </Box>
  );
};

export default FrontPage;
