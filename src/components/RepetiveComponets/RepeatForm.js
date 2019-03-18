import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import RepeatFromList from "./RepeatFromViewList";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
class RepeatForm extends Component {
  constructor() {
    super();

    this.state = {
      serachResult: [
        {
          id: 1,
          title: "Final Fantasy",
          movieDescription:
            "Final Fantasy is a Japanese science fantasy media franchise created by Hironobu Sakaguchi, and developed and owned by Square Enix. The franchise centers on a series of fantasy and science fantasy role-playing video games ",
          email: "company@email.com",
          date: "Realesed on 2016",
          genre: "comedy",
          director: "john hopkins",
          city: "Wallingford",
          state: "Connecticut",
          country: "USA",
          zipcode: "77429"
        },
        {
          id: 2,
          title: "Forest Gump",
          movieDescription:
            "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat,  ",
          email: "company@email.com",
          date: "Released on 2007",
          genre: "Drama/Comedy-drama",

          director: "Robert Zemeckis",

          city: "Wildwood",
          state: "Missouri",
          country: "USA",
          zipcode: "63040"
        },
        {
          id: 3,
          title: "Cast away",
          movieDescription:
            "Obsessively punctual FedEx executive Chuck Noland (Tom Hanks) is en route to an assignment in Malaysia when his plane crashes over the Pacific Ocean during a storm. The sole survivor of the flight, Chuck washes ashore on a deserted island.  ",
          email: "company@email.com",
          date: "Released on 2008",
          genre: "drama/thriller",

          director: "Robert Zemeckis",

          city: "Eureka",
          state: "CA",
          country: "USA",
          zipcode: "77429"
        },
        {
          id: 4,
          title: "The Deaparted",
          movieDescription:
            "South Boston cop Billy Costigan (Leonardo DiCaprio) goes under cover to infiltrate the organization of gangland chief Frank Costello (Jack Nicholson). As Billy gains the mobster's trust, a career criminal named Colin Sullivan (Matt Damon)  ",
          email: "company@email.com",
          date: "Released on 2009",
          genre: "Action/Thriller",

          director: "Martin Scorsese",

          city: "Timonium",
          state: "Maryland",
          country: "USA",
          zipcode: "77429"
        }
      ]
    };
  }

  render() {
    const { classes } = this.props;
    let { serachResult, categories, filter } = this.state;

    // if (filter.type !== "") {
    //   serachResult = serachResult.filter(item => {
    //     return filter.value.includes(item[filter.type]);
    //   });
    // }

    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.root}
          spacing={24}
          justify="flex-start"
          direction="row"
        >
          <Grid item md={3} xs={12} sm={4} />
          <Grid item md={8} xs={12} sm={8}>
            {serachResult.map(result => (
              <RepeatFromList
                title={result.title}
                description={result.movieDescription}
                jobCategory={result.jobCategory}
                genre={result.genre}
                director={result.director}
                date={result.date}
                city={result.city}
                state={result.state}
                country={result.country}
                zipcode={result.zipcode}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default withStyles(styles)(RepeatForm);
