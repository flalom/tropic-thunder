import React from 'react'
import styled from 'styled-components'
import { Radar } from 'react-chartjs-2'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { uniq } from 'ramda'

import { peopleSkills } from '../../../backend/peopleSkills'

const MentorProfile = styled.div`
  background-color: white;
  color: blue;
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const comparePeople = (person1, person2, projectRequirement) => {
  return {
    labels: Object.keys(peopleSkills[person1]).concat(
      Object.keys(peopleSkills[person2]),
    ),
    values: [
      Object.values(peopleSkills[person1]),
      Object.values(peopleSkills[person2]),
    ],
  }
}

const makeRadarData = ({ labels, values }) => ({
  labels,
  datasets: [
    {
      label: 'Alice',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: values[0],
    },
    {
      label: 'Felix',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: values[1],
    },
  ],
})

const conversationStarters = {
  alice: [
    'Hey, my boss told me to contact you because my performance is bad',
    'Hi, the winter is coming, and I need to learn {{ }} for my next project',
    'Hi, I saw that you are a functional programming expert, could you help me with Scala?',
  ],
  bob: [
    'Hey, my boss told me to contact you because my performance is bad',
    'Hi, the winter is coming, and I need to learn {{ }} for my next project',
    'Hi, I saw that you are a functional programming expert, could you help me with Scala?',
  ],
  felix: [
    'Hey, my boss told me to contact you because my performance is bad\n',
    'Hi, the winter is coming, and I need to learn {{ }} for my next project\n',
    'Hi, I saw that you are a functional programming expert, could you help me with Scala?',
  ],
}

const ConversationStarters = props => {
  const currentPerson = props.people[props.currentPerson]
  return (
    <div>
      <ul>
        {props.starters[currentPerson].map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  )
}

const people = Object.keys(conversationStarters)

export default props => {
  const classes = useStyles()
  const currentPerson = props.personId || 0 // TODO from page query
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
            Mentors
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {/* TODO spacing here and card */}
      <div>
        <h2>Here&apos;s you and mentor {people[currentPerson]}</h2>

        <div className="card">
          <Radar data={makeRadarData(comparePeople('alice', 'felix'))} />
        </div>

        <div className="card">
          <ConversationStarters
            starters={conversationStarters}
            currentPerson={currentPerson}
            people={people}
          />
        </div>
        {JSON.stringify(comparePeople('alice', 'felix'))}
      </div>
    </MentorProfile>
  )
}
