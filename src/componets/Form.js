import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormComponent from "./FormComponent";

import { Paper, Button, Grid, Typography } from "@material-ui/core";

// import ManageProfile from '../../pages'
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },

  divider: {
    marginTop: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 700
  }
});

class form extends Component {
  constructor() {
    super();

    this.state = {
      addAccount: []
    };
    this.getAccountFrom = this.getAccountFrom.bind(this);
  }
  //logic how to add the dynamic form
  addAccount = () => {
    let addAccount = [...this.state.addAccount];
    if (addAccount.length < 3) {
      addAccount.push(this.getAccountFrom());
      this.setState({ addAccount });
    }
  };

  componentDidMount() {
    this.addAccount();
  }
  //logic how to delete the dynamic form

  removeAccount = () => {
    let addAccount = [...this.state.addAccount];
    if (addAccount.length <= 3 && addAccount.length > 1) {
      addAccount.pop();
      this.setState({ addAccount });
    }
  };

  //   handleSumit  =() => {
  //       let removeAccount =[ ... this.state.removeAccount];
  //       if (this.addAccount.length)
  //   }
  getAccountFrom() {
    return <FormComponent />;
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={8}
          >
            <Grid item xs={12} md={12} align="center">
              <Typography variant="h6">add delete form </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              {this.state.addAccount.map(el => el)}
              {this.state.addAccount.length < 3 ? (
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.addAccount}
                >
                  add form{" "}
                </Button>
              ) : null}
            </Grid>
            <Grid item xs={12} md={6}>
              {this.state.addAccount.length <= 3 &&
              this.state.addAccount.length > 1 ? (
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={this.removeAccount}
                >
                  delete form{" "}
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(form);
