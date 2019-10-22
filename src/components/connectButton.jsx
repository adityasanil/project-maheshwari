import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextareaAutosize } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const style = {
  textStyle: {
    fontSize: "15px"
  }
};

class Message extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.onOpenModal}
        >
          Connect
        </Button>
        <Dialog open={open} aria-labelledby="message-dialog">
          <DialogTitle id="message-dialog">Message</DialogTitle>
          <DialogContent>
            <DialogContentText>Include your personal note:</DialogContentText>
            <TextareaAutosize
              rows={4}
              cols={30}
              className={classes.textStyle}
              autoFocus
              margin="dense"
              id="message"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onCloseModal} color="primary">
              Connect
            </Button>
            <Button
              style={{ marginRight: "15px" }}
              onClick={this.onCloseModal}
              color="primary"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(style)(Message);
