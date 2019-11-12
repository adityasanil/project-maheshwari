import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import PersonalDetails from "./personalDetails";
import CompanyDetails from "./companyDetails";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SocialMediaDetails from "./socialDetails";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {children}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 220,
    "@media only screen and (max-width: 600px)": {
      width: 150
    }
  },
  mobileView: {
    display: "none",
    "@media only screen and (max-width: 600px)": {
      display: "block",
      marginTop: 10,
      marginBottom: 40
    }
  },
  desktopView: {
    fontSize: 15,
    fontFamily: "Jura",
    fontWeight: "600",
    margin: 10,
    "@media only screen and (max-width: 600px)": {
      display: "none"
    }
  },
  icon: {
    fontSize: "30px",
    margin: 0,
    display: "inline"
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        style={{ height: "260%" }}
      >
        <Tab
          className={classes.mobileView}
          icon={<PersonIcon className={classes.icon} />}
          {...a11yProps(0)}
        />
        <Tab
          className={classes.desktopView}
          label="Personal Details"
          {...a11yProps(1)}
        />

        <Tab
          className={classes.mobileView}
          icon={<BusinessCenterIcon className={classes.icon} />}
          {...a11yProps(2)}
        />
        <Tab
          className={classes.desktopView}
          label="Company Details"
          {...a11yProps(3)}
        />

        <Tab
          className={classes.mobileView}
          icon={<MailIcon className={classes.icon} />}
          {...a11yProps(4)}
        />
        <Tab
          className={classes.desktopView}
          label="Social Media Details"
          {...a11yProps(5)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PersonalDetails />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PersonalDetails />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompanyDetails />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CompanyDetails />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SocialMediaDetails />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SocialMediaDetails />
      </TabPanel>
    </div>
  );
}
