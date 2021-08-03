import React from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import theme from "../theme/theme";
import GitHubIcon from "@material-ui/icons/GitHub";


const Project = (props) => {
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
        color:"purple",
        boxShadow: 'none',
      },

    },
    title: {
      fontSize: "1.4rem",
      fontWeight: "bold",
      display:"inline"
    },
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      margin: "1rem",
            textAlign:"center",

    
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
    },
    imageMobile: {
      height: "350px",
      width: "200px",
      textAlign:"center",
      boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "4px",
      display:"inline",

    },
    icon:{
      display:"inline"
    },
    text:{
      textAlign:"justify"
    }
  });
  const classes = useStyles();

  return (
    <Box className={classes.div}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={
            props.link1 !== ""
              ? () => window.open(props.link1)
              : () => window.open(props.link2)
          }
        >
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
              className={props.mobile===true?classes.imageMobile:classes.image}
              component="img"
              image={props.image}
              title={props.imageTitle}
            />
            <Typography className={classes.text}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
    </Box>
  );
};

export default Project;
