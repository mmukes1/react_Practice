import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import { TextField, FormControl, Grid } from "@material-ui/core";

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

class formComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account: {
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
      }
    };
  }

  handleChange = e => {
    console.log(this.state);
    let account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({ account });
  };

  //   handleChange = name => event => {
  //     console.log(event);
  //     this.setState({ [name]: event.target.value });
  //   };
  render() {
    const { classes } = this.props;
    const { account } = this.state;

    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={8}
        >
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                required
                label="First Name"
                id="outlined-name"
                margin="dense"
                variant="outlined"
                placeholder=""
                name="firstName"
                value={account.firstName}
                onChange={this.handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                required
                label="Last Name"
                id="outlined-name"
                margin="dense"
                variant="outlined"
                placeholder=""
                name="lastName"
                value={account.lastName}
                onChange={this.handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                required
                label="City"
                id="outlined-name"
                margin="dense"
                variant="outlined"
                placeholder=""
                name="city"
                value={account.city}
                onChange={this.handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                required
                margin="dense"
                variant="outlined"
                label="State "
                name="state"
                value={account.state}
                onChange={this.handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                required
                margin="dense"
                variant="outlined"
                label="Zipcode "
                name="zipcode"
                value={account.zipcode}
                onChange={this.handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={6}>
            <FormControl fullWidth>
              <TextField
                required
                label="Country "
                id="outlined-name"
                margin="dense"
                variant="outlined"
                placeholder=""
                name="country"
                value={account.country}
                onChange={this.handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(formComponent);
