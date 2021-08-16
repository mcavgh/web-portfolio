import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import theme from "./../../theme/theme";
import * as styles from "../../theme/commonStyles";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"

const SkillsPage = () => {
  const classes = useStyles();

  const [t, i18n] = useTranslation("global");

  const thirdHalfList = (
    <div className={classes.skillsPage}>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span class="iconify" data-icon="vscode-icons:file-type-mysql" style={{ color: "brown" }}></span>
        </ListItemIcon>
        <ListItemText
          primary="MySQL"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span class="iconify" data-icon="simple-icons:testinglibrary" style={{ color: "brown" }}></span>
        </ListItemIcon>
        <ListItemText
          primary="Testing library"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>

      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span class="iconify" data-icon="vscode-icons:file-type-jest"></span>        </ListItemIcon>
        <ListItemText
          primary="Jest"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>

      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span className="iconify" data-icon="logos:material-ui"></span>
        </ListItemIcon>
        <ListItemText
          primary="Material UI"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
  
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span className="iconify" data-icon="logos:graphql"></span>
        </ListItemIcon>
        <ListItemText
          primary="GraphQl"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span className="iconify" data-icon="vscode-icons:file-type-sqlite"></span>        </ListItemIcon>
        <ListItemText
          primary="SqlLite"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>

    </div>
  )
  const secondHalfList = (
    <div className={classes.skillsPage}>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span className="iconify" data-icon="logos:nodejs-icon"></span>
        </ListItemIcon>
        <ListItemText
          primary="Node"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <span className="iconify" data-icon="simple-icons:express" data-inline="false" style={{ fontSize: "2.2rem" }} ></span>
        </ListItemIcon>
        <ListItemText
          primary="Express"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span className="iconify" data-icon="logos:postgresql"></span>
        </ListItemIcon>
        <ListItemText
          primary="Postgres"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span className="iconify" data-icon="logos:sequelize"></span>
        </ListItemIcon>
        <ListItemText primary="Sequelize" classes={{ primary: classes.listItemText }} />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span className="iconify" data-icon="logos:java"></span>
        </ListItemIcon>
        <ListItemText
          primary="Java"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span className="iconify" data-icon="logos:git-icon"></span>
        </ListItemIcon>
        <ListItemText
          primary="Git"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span className="iconify" data-icon="vscode-icons:file-type-mongo"></span>
        </ListItemIcon>
        <ListItemText
          primary="Mongo"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>




    </div>
  );
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      if (yPos > 805 && yPos < 1573) {
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

    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Typography
        className={`${classes.skillsText} ${classes.headerText}`}
        align="center"
      >
        {t("skills.title")}

      </Typography>
      <Divider classes={{ root: classes.divider }} />
      <Box className={`${classes.rowDiv} ${classes.rowDivider}`}>
        <Box className={classes.columnDiv}>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: shouldShowActions ? 0 : 50, opacity: shouldShowActions ? 1 : 0 }}
            transition={{ delay: 0.1 }}

          >
            <List>

              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <span className="iconify" data-icon="logos:react"></span>
                </ListItemIcon>
                <ListItemText
                  primary="Reactjs"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <span className="iconify" data-icon="logos:react"></span>
                </ListItemIcon>
                <ListItemText
                  primary="React-native"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <span className="iconify" data-icon="logos:redux"></span>
                </ListItemIcon>
                <ListItemText
                  primary="Redux"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <span className="iconify" data-icon="logos:javascript"></span>
                </ListItemIcon>
                <ListItemText
                  primary="JavaScript"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <span className="iconify" data-icon="logos:typescript-icon"></span>              </ListItemIcon>
                <ListItemText
                  primary="Typescript"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <span className="iconify" data-icon="vscode-icons:file-type-html"></span>
                </ListItemIcon>
                <ListItemText
                  primary="HTML"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.icon}>
                  <span className="iconify" data-icon="vscode-icons:file-type-css"></span>
                </ListItemIcon>
                <ListItemText
                  primary="CSS"
                  classes={{ primary: classes.listItemText }}
                />
              </ListItem>

              <Hidden mdUp>{secondHalfList}</Hidden>
            </List>
          </motion.div>
        </Box>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: shouldShowActions ? 0 : 50, opacity: shouldShowActions ? 1 : 0 }}
          transition={{ delay: 0.1 }}

        >
          <Hidden smDown>
            <Box className={classes.columnDiv}>

              <List>{secondHalfList}</List>
            </Box>
          </Hidden>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: shouldShowActions ? 0 : 50, opacity: shouldShowActions ? 1 : 0 }}
          transition={{ delay: 0.1 }}

        >

          <Hidden smDown>
            <Box className={classes.columnDiv}>
              <List>{thirdHalfList}</List>
            </Box>
          </Hidden>
        </motion.div>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  columnDiv: {
    ...styles.columnDiv,
  },
  mainDiv: {
    backgroundColor: "#e8e8e8",
    margin: "0 auto",
    paddingBottom: "1rem",
  },
  rowDiv: {
    ...styles.rowDiv,
  },
  rowDivider: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  divider: {
    ...styles.divider,
  },
  headerText: {
    ...styles.headerText,
  },
  skillsText: {
    marginTop: "2rem",
  },
  listItemText: {
    color: "black",
    fontSize: "1.2rem",
    margin: "0 1rem",
  },
  icon: {
    color: "black",
    fontSize: "2rem",
  },
  skillsPage: {
    //paddingTop: "22rem"
  }
});

export default SkillsPage;
