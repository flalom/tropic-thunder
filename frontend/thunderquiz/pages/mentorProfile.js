import React from "react";
import styled from "styled-components";
import { Radar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

const MentorProfile = styled.div`
  background-color: white;
  color: blue;
`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
// Alice is first mentor
// Bob is second mentor
// Felix is treainie

const data = {
  labels: [
    "JSX",
    "JS",
    "Node.js",
    "React",
    "Angular",
    "HTML",
    "Redux",
    "ESLint",
    "NPM"
  ],
  datasets: [
    {
      label: "Alice",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: "Felix",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

const conversationStarters = {
  alice: [
    "Hey, my boss told me to contact you because my performance is bad",
    "Hi, the winter is coming, and I need to learn {{ }} for my next project",
    "Hi, I saw that you are a functional programming expert, could you help me with Scala?"
  ],
  bob: [],
  felix: []
};

const ConversationStarters = props => (
  <div>{JSON.stringify(props.starters)}</div>
);

const people = Object.keys(conversationStarters);

export default props => {
  const classes = useStyles();
  return (
    <MentorProfile>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      Hey my name is {props.name || people[0]}
      <div>
        <h2>Here&apos;s you and mentor</h2>
        <Radar data={data} />
        <ConversationStarters starters={conversationStarters} />{" "}
      </div>
    </MentorProfile>
  );
};
