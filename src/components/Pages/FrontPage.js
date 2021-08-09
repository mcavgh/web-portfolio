import React from "react";
import {
  Button, Box, Typography, IconButton, Fab, Hidden, makeStyles,
} from "@material-ui/core";

import theme from "../../theme/theme";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"
const FrontPage = () => {
  const [t, i18n] = useTranslation("global");

  const classes = useStyles();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      if (yPos >= 0 && yPos < 330) {
        setShouldShowActions(true);
      } else {
        setShouldShowActions(false);
      }
      setLastYPos(yPos);
    }
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <Box className={classes.background} id="Top" >
      <Box className={classes.titular}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: shouldShowActions ? 0 : 50, opacity: shouldShowActions ? 1 : 0 }}
          transition={{ delay: 0.1, }}

        >
          <Typography className={classes.topText} variant="h3"            >
            {t("front.hello")}
          </Typography>
          <Typography className={classes.topText} variant="h3" >
            Martín Cavanagh,
          </Typography>
          <Typography className={classes.name} variant="h3" >
            Fullstack Web Developer.
          </Typography>
        </  motion.div>
      </Box>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: shouldShowActions ? 0 : 50, opacity: shouldShowActions ? 1 : 0 }}
        transition={{ delay: 0.3 }}

      >
        <Button
          variant="outlined"
          className={classes.button}
          aria-label="Scroll Down"
          onClick={() => scrollTo("AboutMe")}
        >
          {t("front.saberbtn")}
        </Button>
      </motion.div>
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
export default FrontPage;
