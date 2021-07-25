import React from "react";
import { Box, Typography, Divider, makeStyles } from "@material-ui/core";
import * as styles from "../../theme/commonStyles";

import Project from "./../Project";
import homebeatstore from '../../images/home-beatstore.bmp';
import homeEatx from '../../images/pathfindingScreenshot.png';
import videogamesHome from '../../images/videogamesHome.bmp';
import weatherhome from '../../images/weather-home.bmp';
import { useTranslation } from 'react-i18next';



const ProjectsPage = () => {
  const [ t, i18n ] = useTranslation("global");
  const useStyles = makeStyles({
    columnDiv: {
      backgroundImage: "linear-gradient(135deg,#ff2300,#a100cd)",

      ...styles.columnDiv,
      width: "auto",
    },
    headerText: {
      color: "white",
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
  const nodeIcon = (
    <span className="iconify" style={{ fontSize: "1.7rem", margin: "0 0.35rem" }} data-icon="vscode-icons:file-type-node" data-inline="false"></span>
  );
  const sequelizeIcon = (
    <span className="iconify" style={{ fontSize: "1.7rem", margin: "0 0.35rem" }} data-icon="logos:sequelize" data-inline="false"></span>
  );
  const postgresIcon = (
    <span className="iconify" style={{ fontSize: "1.7rem", margin: "0 0.35rem" }} data-icon="logos:postgresql" data-inline="false"></span>);

  const expressIcon = (
    <span className="iconify" style={{ fontSize: "1.7rem", margin: "0 0.35rem" }} data-icon="simple-icons:express" data-inline="false"></span>);
    const MUIcon = (

<span class="iconify" data-icon="logos:material-ui" data-inline="false"></span>
    );

  const beatStoreIcons = (
    <Box className={classes.icons}>
      {reactIcon}
      {reduxIcon}
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
      {nodeIcon}
      {expressIcon}
      {sequelizeIcon}
      {postgresIcon}
      
    </Box>
  );
  const eatxIcons = (
    <Box className={classes.icons}>
      {reactIcon}
      {reduxIcon}
      {javascriptIcon}
      {htmlIcon}
      {cssIcon}
      {MUIcon}
      {nodeIcon}
      {expressIcon}
      {sequelizeIcon}
      {postgresIcon}
      
    </Box>
  );
  const frontIcons = (
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
      <Typography className={classes.headerText}>{t("proyects.title")}</Typography>
      <Divider className={classes.divider} />
      <Project
        title="Beatstore"
        icons={beatStoreIcons}
      description=          {t("proyects.beatstore")}
    
        image={homebeatstore}
        imageTitle="beatstore screenshot"
        link1="https://beatstore-henry.web.app/"
        github="https://github.com/CavanaghMartin"
      />
      <Project
        title="Eatx"
        icons={eatxIcons}
        description={t("proyects.eatx")}

        image={homeEatx}
        imageTitle="eatx screenshot"
        link1="https://ec-webft11-g10.vercel.app/"
        github="https://github.com/CavanaghMartin/ec-webft11-G10"
      />
       <Project
        title="Videogames app"
        icons={frontIcons}
        description={t("proyects.videogamesApp")}
        image={videogamesHome}
        imageTitle="videogames screenshot"
        link1="https://pi-videogames.vercel.app/home"
        github="https://github.com/CavanaghMartin/videogames_app"
      />
          <Project
        title="Weather app"
        icons={frontIcons}
        description={t("proyects.wheatherApp")}
        image={weatherhome}
        imageTitle="videogames screenshot"
        link1="https://weather-app-ok.vercel.app/"
        github="https://github.com/CavanaghMartin"
      />

    </Box>
  );
};

export default ProjectsPage;
