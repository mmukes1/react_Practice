import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { LocationOn } from "@material-ui/icons";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: 20
  },
  bottomgrid: {
    display: "flex",
    alignItems: "center",
    flexGrow: 2,
    padding: 5
  },
  noDecoration: {
    textDecoration: "none"
  }
});
class RepeatFormList extends React.Component {
  render() {
    const {
      title,
      description,
      city,
      state,
      zipcode,
      genre,
      director,
      date,
      classes
    } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid container justify="flex-end" alignItems="center">
              <Typography
                variant="caption"
                align="right"
                color="secondary"
                style={{
                  fontStyle: "italic"
                }}
              >
                {date}
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h6" align="left" color="primary">
                {title}
              </Typography>

              <Typography
                variant="subtitle2"
                align="left"
                gutterBottom
                color="secondary"
              >
                {`${director} ${genre}`}
              </Typography>

              <Typography
                variant="subtitle2"
                align="left"
                gutterBottom
                color="secondary"
              >
                {description}
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                variant="subtitle2"
                align="left"
                gutterBottom
                color="secondary"
              >
                <LocationOn color="primary" />
                {`${city}, ${state}, ${zipcode}`}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(RepeatFormList);
