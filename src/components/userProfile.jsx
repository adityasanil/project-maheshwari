import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardContent, Grid, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ProprietorIcon from "@material-ui/icons/AccountBoxRounded";
import AddressIcon from "@material-ui/icons/HomeWork";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ContactIcon from "@material-ui/icons/RingVolume";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/AlternateEmail";

const useStyles = makeStyles({
  card: {
    minWidth: 150,
    margin: 50,
    marginTop: 20,
    background: "rgb(54, 9, 9)",
    color: "#CD853F"
  },

  title: {
    fontSize: "38px",
    fontFamily: "Cinzel Decorative",
    align: "justify",
    padding: 8,
    paddingBottom: 25
  },

  subTitle: {
    paddingBottom: 40,
    fontFamily: "Oranienbaum",
    fontSize: 22
  },

  pos: {
    marginBottom: 12
  },

  services: {
    marginBottom: 0
  },

  card2: {
    marginTop: 88,
    background: "#FAFAFA",
    margin: 50
  },

  primaryText: {
    color: "rgb(54, 9, 9)",
    fontFamily: "Cinzel Decorative",
    fontWeight: "600"
  },

  seondaryText: {
    color: "#CD853F",
    fontFamily: "Oranienbaum",
    fontWeight: "600"
  },

  avatar: {
    backgroundColor: "rgb(54, 9, 9)"
  },

  headings: {
    marginTop: 30,
    fontFamily: "Balthazar",
    fontSize: "30px"
    // margin: 50
  },

  business: {
    // paddingLeft: 35,
    fontFamily: "Balthazar",
    marginTop: 30,
    marginBottom: 0,
    fontSize: "30px",
    marginLeft: 30
  }
});

export default function UserProfile() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Typography
            className={classes.business}
            variant="h5"
            align="left"
            gutterBottom
          >
            Business Card:
          </Typography>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                variant="h5"
                className={classes.title}
                align="center"
                gutterBottom
              >
                Company Name
              </Typography>
              <Typography
                className={classes.subTitle}
                variant="subtitle1"
                align="center"
                gutterBottom
              >
                www.helloworld.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className={classes.card2}>
            <CardContent>
              <Grid container>
                <Grid item xs={12} lg={7}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <ProprietorIcon />
                      </Avatar>
                    </ListItemAvatar>
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
                          Full Name
                        </Typography>
                      }
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12} lg={5}>
                  {/* </Grid><Grid> */}
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <AddressIcon />
                      </Avatar>
                    </ListItemAvatar>
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
                        <div>
                          {" "}
                          <div className={classes.seondaryText}>
                            Line 1
                          </div>{" "}
                          <div className={classes.seondaryText}>Line2</div>{" "}
                        </div>
                      }
                    />
                  </ListItem>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} lg={7}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <ContactIcon />
                      </Avatar>
                    </ListItemAvatar>
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
                          Landline, Mobile Number
                        </Typography>
                      }
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={12} lg={5}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <EmailIcon />
                      </Avatar>
                    </ListItemAvatar>
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
                          EmailID
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
          <Typography variant="h5" className={classes.headings}>
            Services Offered:
          </Typography>
          <Typography variant="body1">Abc, XyZ, IT</Typography>
          <br />
          <br />
          <Typography variant="h5" className={classes.headings}>
            Social Media Connect:
          </Typography>
          <Grid container>
            <Grid item xs={12} lg={7}>
              <ListItem>
                <ListItemAvatar>
                  <FacebookIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Account Name"
                  secondary={<a href="#">Link</a>}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} lg={5}>
              <ListItem>
                <ListItemAvatar>
                  <InstagramIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Account Name"
                  secondary={<a href="#">Link</a>}
                />
              </ListItem>
            </Grid>
          </Grid>
          <Grid container>
            {/* <Grid Container> */}
            <Grid item xs={12} lg={7}>
              <ListItem>
                <ListItemAvatar>
                  <LinkedInIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Account Name"
                  secondary={<a href="#">Link</a>}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} lg={5}>
              <ListItem>
                <ListItemAvatar>
                  <TwitterIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Account Name"
                  secondary={<a href="#">Link</a>}
                />
              </ListItem>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
