import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import MenuIcon from '@material-ui/icons/Menu'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import React from 'react'
import SendIcon from '@material-ui/icons/Send'
import styled from 'styled-components'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Radar } from 'react-chartjs-2'
import { always, comparator, lt, pipe as _, sort, uniq } from 'ramda'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'

import { peopleSkills } from '../../../backend/peopleSkills'

const MentorProfile = styled.div`
  background-color: white
  color: blue
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  card: {
    maxWidth: 645,
  },
  media: {
    height: 140,
  },
}))

const comparePeople = (person1, person2, projectRequirement) => ({
  labels: _(uniq, sort(comparator(lt)))(Object.keys(peopleSkills[person1])
    .concat(
      Object.keys(peopleSkills[person2])),
  ),
  values: [
    Object.values(peopleSkills[person1]),
    Object.values(peopleSkills[person2]),
  ],
})

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

const onConversationStarterClick = () => always(null)

const ConversationStarters = props => {
  const classes = useStyles()
  const currentPerson = props.people[props.currentPerson]

  return <List
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">

      </ListSubheader>
    }
    className={classes.root}
  >
    {props.starters[currentPerson].map((e, i) => (
      <ListItem key={i} button>
        <ListItemIcon>
          <SendIcon/>
        </ListItemIcon>
        <ListItemText primary={e}/>
      </ListItem>
    ))}
  </List>
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
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Mentors
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {/* TODO spacing here and card */}
      <div>
        <h2>Here&aposs you and mentor {people[currentPerson]}</h2>

        <div className="card">
          <Radar data={makeRadarData(comparePeople('alice', 'felix'))}/>
        </div>

        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Here are great conversation starters
              </Typography>
              <ConversationStarters
                starters={conversationStarters}
                currentPerson={currentPerson}
                people={people}
              />
            </CardContent>
          </CardActionArea>
        </Card>

        <Fab color="primary" aria-label="add" className={classes.fab}>
          <NavigateNextIcon/>
        </Fab>
      </div>
    </MentorProfile>
  )
}
