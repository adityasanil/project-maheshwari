import React, { Component } from "react";
import { CardContent, Grid, Container, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ProprietorIcon from "@material-ui/icons/AccountBoxRounded";
import AddressIcon from "@material-ui/icons/HomeWork";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ContactIcon from "@material-ui/icons/RingVolume";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/AlternateEmail";

const useStyles = {
  card: {
    minWidth: 200,
    margin: 50,
    marginTop: 20,
    background: "rgb(54, 9, 9)",
    minHeight: 220,
    color: "#CD853F",
    "@media only screen and (max-width: 600px)": {
      margin: 10,
      minHeight: 150
    }
  },

  title: {
    fontSize: "38px",
    fontFamily: "Cinzel Decorative",
    align: "justify",
    padding: 28,
    paddingBottom: 0,
    "@media only screen and (max-width: 600px)": {
      marginTop: 10,
      fontSize: "20px"
    }
  },

  subTitle: {
    paddingBottom: 20,
    fontFamily: "Oranienbaum",
    fontSize: "22px",
    "@media only screen and (max-width: 600px)": {
      fontSize: "18px"
    }
  },
  pos: {
    marginBottom: 12
  },

  services: {
    marginBottom: 0
  },
  card2: {
    minWidth: 200,
    margin: 50,
    marginTop: 20,
    minHeight: 220,
    background: "#eeeeee",
    "@media only screen and (max-width: 600px)": {
      margin: 10,
      padding: 0,
      minHeight: 150,
      marginBottom: 15
    }
  },

  primaryText: {
    color: "rgb(54, 9, 9)",
    fontFamily: "Cinzel Decorative",
    fontWeight: "600",

    "@media only screen and (max-width: 600px)": {
      fontSize: "10px"
    }
  },
  seondaryText: {
    color: "#CD853F",
    fontFamily: "Oranienbaum",
    fontWeight: "600",
    "@media only screen and (max-width: 600px)": {
      fontSize: "12px"
    }
  },

  cardIcon: {
    "@media only screen and (max-width: 600px)": {
      fontSize: "20px"
    }
  },
  avatar: {
    backgroundColor: "rgb(54, 9, 9)",
    marginRight: 15,
    "@media only screen and (max-width: 600px)": {
      height: 30,
      width: 30,
      marginRight: 5
    }
  },
  headings: {
    marginTop: 5,
    fontFamily: "Balthazar",
    fontSize: "30px",
    "@media only screen and (max-width: 600px)": {
      fontSize: "25px"
    }
  },
  business: {
    fontFamily: "Balthazar",
    marginTop: 30,
    marginBottom: 0,
    fontSize: "30px",
    marginLeft: 34,
    "@media only screen and (max-width: 600px)": {
      marginLeft: 10,
      fontSize: "25px",
      marginTop: 15
    }
  },

  smIcon: {
    fontSize: "30px",
    "@media only screen and (max-width: 600px)": {
      fontSize: "20px"
    }
  },

  smName: {
    fontWeight: "bold",
    fontFamily: "Oranienbaum",
    fontSize: "18px",
    "@media only screen and (max-width: 600px)": {
      fontSize: "15px"
    }
  },

  smLink: {
    textDecoration: "none",
    fontsize: "12px",
    "@media only screen and (max-width: 600px)": {
      fontSize: "12px"
    }
  },

  product: {
    marginLeft: "15px",
    fontSize: "20px",
    "@media only screen and (max-width: 600px)": {
      marginLeft: 0
    }
  },

  cardContent: {
    "@media only screen and (max-width: 600px)": {
      paddingLeft: 20,
      margin: 0
    }
  },

  listItem: {
    "@media only screen and (max-width: 600px)": {
      padding: 0,
      margin: 0
    }
  }
};

class UserProfile extends Component {
  render() {
    const { classes, user } = this.props;
    return (
      <div>
        <Typography
          className={classes.business}
          variant="h5"
          align="left"
          gutterBottom
        >
          Business Card:
        </Typography>
        <Grid container>
          <Grid item xs={12} lg={6} md={6}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="h5"
                  className={classes.title}
                  align="center"
                  gutterBottom
                >
                  {user.companyName}
                </Typography>
                <Typography
                  className={classes.subTitle}
                  variant="subtitle1"
                  align="center"
                  gutterBottom
                >
                  {user.comapanyWebsite}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Card className={classes.card2}>
              <CardContent className={classes.cardContent}>
                <Grid container>
                  <Grid item xs={6} lg={6}>
                    <ListItem className={classes.listItem}>
                      <Avatar className={classes.avatar}>
                        <ProprietorIcon className={classes.cardIcon} />
                      </Avatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant="overline"
                            className={classes.primaryText}
                          >
                            Proprietor
                          </Typography>
                        }
                        secondary={
                          <Typography
                            display="block"
                            className={classes.seondaryText}
                          >
                            {user.firstName + " " + user.lastName}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Grid>
                  <Grid item xs={6} lg={6}>
                    <ListItem className={classes.listItem}>
                      <Avatar className={classes.avatar}>
                        <AddressIcon className={classes.cardIcon} />
                      </Avatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant="overline"
                            className={classes.primaryText}
                          >
                            Address
                          </Typography>
                        }
                        secondary={
                          <Typography
                            className={classes.seondaryText}
                            display="block"
                          >
                            {user.residentialAddress}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} lg={6}>
                    <ListItem className={classes.listItem}>
                      <Avatar className={classes.avatar}>
                        <ContactIcon className={classes.cardIcon} />
                      </Avatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant="overline"
                            className={classes.primaryText}
                          >
                            Contact
                          </Typography>
                        }
                        secondary={
                          <Typography
                            display="block"
                            className={classes.seondaryText}
                          >
                            {user.contact}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Grid>
                  <Grid item xs={6} lg={6}>
                    <ListItem className={classes.listItem}>
                      <Avatar className={classes.avatar}>
                        <EmailIcon className={classes.cardIcon} />
                      </Avatar>
                      <ListItemText
                        primary={
                          <Typography
                            variant="overline"
                            className={classes.primaryText}
                          >
                            Email
                          </Typography>
                        }
                        secondary={
                          <Typography
                            display="block"
                            className={classes.seondaryText}
                          >
                            {user.email}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Container>
            <Divider />
            <Typography variant="h5" className={classes.headings}>
              Services Offered:
            </Typography>
            <Typography variant="body1" className={classes.product}>
              {user.product}
            </Typography>
            <br />
            <br />
            <Divider />
            <Typography variant="h5" className={classes.headings}>
              Social Media Connect:
            </Typography>
            <Grid container>
              <Grid item xs={6} lg={3}>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.avatar}>
                    <FacebookIcon className={classes.smIcon} />
                  </Avatar>
                  <ListItemText
                    primary={
                      <Typography variant="body1" className={classes.smName}>
                        Facebook:
                      </Typography>
                    }
                    secondary={
                      <a
                        href={"http://" + user.facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.smLink}
                      >
                        {user.facebookLink}
                      </a>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={6} lg={3}>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.avatar}>
                    <InstagramIcon className={classes.smIcon} />
                  </Avatar>
                  <ListItemText
                    primary={
                      <Typography variant="body1" className={classes.smName}>
                        Instagram:
                      </Typography>
                    }
                    secondary={
                      <a
                        href={"http://" + user.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.smLink}
                      >
                        {user.instagramLink}
                      </a>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={6} lg={3}>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.avatar}>
                    <LinkedInIcon className={classes.smIcon} />
                  </Avatar>
                  <ListItemText
                    primary={
                      <Typography variant="body1" className={classes.smName}>
                        LinkedIn:
                      </Typography>
                    }
                    secondary={
                      <a
                        href={"http://" + user.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.smLink}
                      >
                        {user.linkedinLink}
                      </a>
                    }
                  />
                </ListItem>
              </Grid>
              <Grid item xs={6} lg={3}>
                <ListItem className={classes.listItem}>
                  <Avatar className={classes.avatar}>
                    <TwitterIcon className={classes.smIcon} />
                  </Avatar>
                  <ListItemText
                    primary={
                      <Typography variant="body1" className={classes.smName}>
                        Twitter:
                      </Typography>
                    }
                    secondary={
                      <a
                        href={"http://" + user.twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.smLink}
                      >
                        {user.twitterLink}
                      </a>
                    }
                  />
                </ListItem>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(UserProfile);
