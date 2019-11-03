import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import Fab from '@material-ui/core/Fab'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import React, { useState } from 'react'
import SendIcon from '@material-ui/icons/Send'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { pipe as _, always, comparator, lt, sort, uniq } from 'ramda'
import { Radar } from 'react-chartjs-2'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'

import ProfilePicture from '../components/ProfilePicture'
import { peopleSkills } from '../../../backend/peopleSkills'

const Container = styled.div`
  background-color: white;
  color: blue;
`

const comparePeople = (person1, person2, projectRequirement) => ({
  labels: _(uniq, sort(comparator(lt)))(
    Object.keys(peopleSkills[person1]).concat(
      Object.keys(peopleSkills[person2]),
    ),
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

const upperCase = str =>
  str.charAt(0).toLocaleUpperCase() + str.substring(1)

const peopleNames = ['alice', 'bob', 'felix']
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

const ConversationStarters = ({ classes, starters, currentPersonName }) => {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
        ></ListSubheader>
      }
      className={classes.root}
    >
      {starters &&
      starters[currentPersonName] &&
      starters[currentPersonName].map((e, i) => (
        <ListItem key={i} button>
          <ListItemIcon>
            <SendIcon/>
          </ListItemIcon>
          <ListItemText primary={e}/>
        </ListItem>
      ))}
    </List>
  )
}

const people = Object.keys(conversationStarters)

export default ({ classes }) => {
  const [currentPersonId, setCurrentPerson] = useState(0)
  const nextPerson = () => setCurrentPerson((currentPersonId + 1) % 3)

  return (
    <Container>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>

          <ProfilePicture
            mentorUrl={`${peopleNames[currentPersonId]}.jpg`}/>

          <CardContent>
            <Typography
              gutterBottom variant="h2" component="h2">
              {upperCase(peopleNames[currentPersonId])}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Pick
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h2" component="h2">
              Here&apos;s you and mentor {upperCase(people[currentPersonId])}
            </Typography>

            <Radar
              style={{height: '500px'}}
              data={makeRadarData(comparePeople('alice', 'felix'))}/>

          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Here are great conversation starters
            </Typography>
            <ConversationStarters
              classes={classes}
              starters={conversationStarters}
              currentPersonName={people[currentPersonId]}
              people={people}
            />
          </CardContent>
        </CardActionArea>
      </Card>

      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={nextPerson}
      >
        <NavigateNextIcon/>
      </Fab>
    </Container>
  )
}
