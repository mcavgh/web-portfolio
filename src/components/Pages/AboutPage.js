import React from "react";
import { Box, Typography, Divider, Link, makeStyles, Grid, CardMedia, Button } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import picture from "./../../images/picture.jpg";

import SkillsPage from "./SkillsPage";

const AboutPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      [theme.breakpoints.down("xl")]: {
        width: "45%",
      },
      [theme.breakpoints.down("lg")]: {
        width: "50%",
      },
      [theme.breakpoints.down("md")]: {
        width: "60%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
      margin: "0 auto",
    },
    headerText: {
      color:"blue",
      ...styles.headerText,
    },
    aboutText: {
    },
    divider: {
      ...styles.divider,
    },
    bodyText: {
      fontSize: "1.1rem",
      color: "black",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "1rem",
      lineHeight: "1.6rem",
    },
    link: {
      color: "rgba(1, 81, 205, 0.87)",
      textShadow: "1px 1px #b2dfdb",
      textDecoration: "none",
      borderBottom: "1px solid #b2dfdb",
      "&:hover": {
        color: "#b2dfdb",
        cursor: "pointer",
      },
    },
    flexbos: {
      display: "flex",
      justifyContent: "space-around"
    },
    picture: {
      width: "100%",
      height: "100%",
      maxHeight: "21rem",
      maxWidth: "259px",

      margin: "8rem",
      boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.25)",
      [theme.breakpoints.down("xs")]: {
        margin: "0",
        maxHeight: "80vh",
        maxwidth: "80vw",



      },
    },
    root: {
      padding: "3rem",
      '&:hover': {
        cursor: "pointer"
      }

    },
    AboutMe: {
      display: "block",
    }

  });
  const classes = useStyles();

  const scrollToContact = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={classes.AboutMe} id="AboutMe">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center" className={classes.flexbos}
        >
          <Grid item lg={6} md={6} xs={12} className={classes.root}>
            <CardMedia
              component="img"
              src={picture}
              alt="A picture of me"
              className={classes.picture}
            />
          </Grid>
          <Grid item lg={6} md={6} xs={12} className={`${classes.columnDiv} ${classes.mainDiv}`}>
            <Typography className={`${classes.aboutText} ${classes.headerText}`}>
              About Me
            </Typography>
            <Divider classes={{ root: classes.divider }} />
            <Typography className={classes.bodyText}>
              My name is <b>Martin Cavanagh</b> and I am a fullstack web developer who enjoys creating
              effective business logic coupled with beautiful designs. I like to learn new technologies. <br /> <br />
              {" "}

              <Link
                onClick={scrollToContact}
                className={classes.link}
                underline="none"
              >
                contact information and links here
              </Link>
              .
            </Typography>
            <Button
              color="black"
              variant="outlined"
              className={classes.button}
              aria-label="Scroll Down"
              onClick={() =>      window.location.href='https://firebasestorage.googleapis.com/v0/b/react-auth-punch-it.appspot.com/o/CV_Cavanagh_%20Martin%20(2).pdf?alt=media&token=cf7aa3ed-9202-4bb6-8e7b-03b8be484a0b'}

            >
              Download resume
            </Button>

          </Grid>
        </Grid>
      </div>
      <SkillsPage />
    </>
  );
};

export default AboutPage;
