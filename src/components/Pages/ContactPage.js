import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Divider,
  Tooltip,
  makeStyles,
  Zoom,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";

const ContactPage = () => {
  const useStyles = makeStyles({
    mainDiv: {
      backgroundColor: "rgba(0, 0, 0, 0.92)",
      position: "relative",
      bottom: "0",
      marginTop: "5rem",
      paddingTop: "1rem",
      paddingBottom: "0.6rem",
    },
    columnDiv: {
      ...styles.columnDiv,
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    headerText: {
      ...styles.headerText,
    },
    contactText: {
      color: "#eeeeee",
      margin: "1rem",
      textShadow: "0.1rem 0.1rem #4f4f4f",
    },
    divider: {
      ...styles.divider,
    },
    contactDivider: {
      backgroundColor: "#eeeeee",
    },
    comentText: {
      margin: "1rem",
      color: "#eeeeee",
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    emailText: {
      color: "#eeeeee",
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    link: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    icon: {
      color: "#eeeeee",
      [theme.breakpoints.down("xl")]: {
        margin: "0.2rem 1.4rem",
      },
      [theme.breakpoints.down("md")]: {
        margin: "0.2rem 0.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "0.1rem",
      },
    },
    github: {
      fontSize: "2.2rem",
    },
    linkedIn: {
      fontSize: "2.7rem",
    },
    twitter: {
      fontSize: "2.6rem",
    },
  });
  const classes = useStyles();


  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}` }id="Contact">
      <Typography className={`${classes.headerText} ${classes.contactText}`}>
        Contacto
      </Typography>
      <Divider
        classes={{ root: `${classes.divider} ${classes.contactDivider}` }}
      />
      <Typography className={classes.comentText}>
        Me podés contactar por mail o por LinkedIn:
      </Typography>
      <Box>


        <Box className={classes.rowDiv}>
          <IconButton
            className={classes.icon}
            aria-label="GitHub link"
            onClick={() => window.open("mailto: martincavanaghx@gmail.com")}
          >
            <EmailIcon className={classes.github} />
          </IconButton>
          <Typography className={classes.emailText}>
            Email:&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Link href="mailto: martincavanaghx@gmail.com" className={classes.link}>
            martincavanaghx@gmail.com
          </Link>
        </Box>
        <Box className={classes.rowDiv}>
          <IconButton
            className={classes.icon}
            aria-label="GitHub link"
            onClick={() => window.open("https://www.linkedin.com/in/martincavanagh/")}
          >
            <LinkedInIcon className={classes.github} />
          </IconButton>
          <Typography className={classes.emailText}>
            Linkedin:&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Link href="https://www.linkedin.com/in/martincavanagh/" className={classes.link}>
            /martincavanagh
          </Link>
        </Box>
        <Box className={classes.rowDiv}>

          <IconButton
            className={classes.icon}
            aria-label="GitHub link"
            onClick={() => window.open("https://github.com/CavanaghMartin")}
          >
            <GitHubIcon className={classes.github} />
          </IconButton>
          <Typography className={classes.emailText}>
            Github:&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Link href="https://github.com/CavanaghMartin" className={classes.link}>
            /CavanaghMartin
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
