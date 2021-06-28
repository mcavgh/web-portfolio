import React from "react";
import { Box, Typography, Divider, makeStyles } from "@material-ui/core";
import * as styles from "../../theme/commonStyles";

import Project from "./../Project";
import homebeatstore from '../../images/home-beatstore.bmp';


const ProjectsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      backgroundImage: "linear-gradient(135deg,#ff2300,#a100cd)",

      ...styles.columnDiv,
      width: "auto",
    },
    headerText: {
      color:"white",
      ...styles.headerText,
      marginTop: "5rem",
    },
    divider: {
      ...styles.divider,
      paddingBottom: "0.15rem",
    },
    icons: {
      fontSize: "1.5rem",
      display: "flex",
      width: "100%",
      margin: "0.5rem 0",
    },
  });
  const classes = useStyles();

  const reactIcon = (
    <span
      className="iconify"
      data-icon="logos:react"
      data-inline="false"
      style={{ fontSize: "1.5rem", margin: "0 0.35rem 0 0" }}
    />
  );

  const reduxIcon = (
    <span
      className="iconify"
      data-icon="logos:redux"
      data-inline="false"
      style={{ fontSize: "1.5rem", margin: "0 0.35rem" }}
    />
  );

  const javascriptIcon = (
    <span
      className="iconify"
      data-icon="logos:javascript"
      data-inline="false"
      style={{ fontSize: "1.6rem", margin: "0 0.35rem" }}
    />
  );

  const htmlIcon = (
    <span
      className="iconify"
      data-icon="vscode-icons:file-type-html"
      data-inline="false"
      style={{ fontSize: "1.7rem", margin: "0 0.35rem" }}
    />
  );

  const cssIcon = (
    <span
      className="iconify"
      data-icon="vscode-icons:file-type-css"
      data-inline="false"
      style={{ fontSize: "1.7rem", margin: "0 0.35rem" }}
    />
  );

  // const javaIcon = (
  //   <span
  //     className="iconify"
  //     data-icon="logos:java"
  //     data-inline="false"
  //     style={{ fontSize: "1.7rem", margin: "0 0.35rem 0 0" }}
  //   />
  // );

  const toDoListIcons = (
    <Box className={classes.icons}>
      {reactIcon}
      {reduxIcon}
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
    </Box>
  );


  return (
    <Box className={classes.columnDiv} id="Projects">
      <Typography className={classes.headerText}>Projects</Typography>
      <Divider className={classes.divider} />
      <Project
        title="Beatstore"
        icons={toDoListIcons}
        description="A to-do list application made with Reactjs and Redux. Features include the ability to sort tasks, a fully responsive design, and a dark mode and a pink mode."
        image={homebeatstore}
        imageTitle="To-do List screenshot"
        link1="https://beatstore-henry.web.app/"
        buttonText1="Live Demo"
        buttonText2="GitHub"
      />
      
    </Box>
  );
};

export default ProjectsPage;
