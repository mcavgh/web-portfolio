import React from "react";
import {
  Box, Typography, Card, CardActionArea, CardContent, CardMedia, makeStyles, IconButton,
} from "@material-ui/core";
import theme from "../theme/theme";
import GitHubIcon from "@material-ui/icons/GitHub";
import { motion } from "framer-motion"


const Project = (props) => {
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      if (yPos > 1400 && yPos < 4900) {
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
  const classes = useStyles();

  return (
    <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y:  shouldShowActions ? 0 : 50 , opacity: shouldShowActions ? 1 : 0 }}
    transition={{ delay: 0.1 }}

  >
      <Box className={classes.div}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>{props.title}</Typography>
            <IconButton
              className={classes.icon}
              aria-label="GitHub link"
              onClick={() => window.open(props.github)}
            >
              <GitHubIcon className={classes.github} />
            </IconButton>
            {props.icons}
            <CardMedia
              className={props.mobile === true ? classes.imageMobile : classes.image}
              component="img"
              image={props.image}
              title={props.imageTitle}
              onClick={() => window.open(props.link1)}
            />
            <Typography className={classes.text}>
              {props.description}
            </Typography>
          </CardContent>

        </Card>
      </Box>
    </motion.div>
  );
};

export default Project;

const useStyles = makeStyles({
  card: {
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
      width: "75%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    boxShadow: "4px 4px 5px black",
    '&:hover': {
      color: "purple",
      boxShadow: 'none',
    },

  },
  title: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    display: "inline"
  },
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "1rem",
    textAlign: "center",


  },
  button: {
    margin: "0.5rem",
    backgroundColor: "#b2dfdb",
    boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
    "&:hover": {
      backgroundColor: "#a9d4d0",
    },
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    cursor: "pointer"

  },
  imageMobile: {
    height: "350px",
    width: "200px",
    textAlign: "center",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "4px",
    display: "inline",

  },
  icon: {
    display: "inline"
  },
  text: {
    textAlign: "justify"
  }
});