import React, { useState } from 'react'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Fab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Slide,
  useScrollTrigger,
  Zoom
} from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import SendIcon from '@material-ui/icons/Send'
import Typography from '@material-ui/core/Typography'
import { pipe as _, comparator, lt, sort, uniq } from 'ramda'
import { Radar } from 'react-chartjs-2'

import ProfilePicture from '../components/ProfilePicture'
import { peopleSkills } from '../../../backend/peopleSkills'

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

const makeTwoPeopleRadar =
  ({ labels, values }, legendNames = ['alice', 'felix'],) => ({
    labels,
    datasets: [
      {
        label: upperCase(legendNames[0]),
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: values[0],
      },
      {
        label: upperCase(legendNames[1]),
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

const makeSinglePersonRadar =
  ({ labels, values }, legendNames = ['alice'],) => ({
    labels,
    datasets: [
      {
        label: upperCase(legendNames[0]),
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: values[0],
      },
    ],
  })

const upperCase = str =>
  str.charAt(0).toLocaleUpperCase() + str.substring(1)

const conversationStarters = {
  alice: [
    'Hey, my boss told me to contact you because my performance is bad',
    'Hi, the winter is coming, and I need to learn {{ }} for my next project',
    'Hi, I saw that you are a functional programming expert, could you help me with Scala?',
  ],
  bob: [
    'Hey, I hear you like Pandas',
    'Hi, the winter is coming, and we should do some PHP, to keep CPU warm',
    'Hi, I saw that you are a object oriented expert, could you help me with Angular?',
  ],
  felix: ['Maiu!', 'Woof! Woof!', 'Pssst.. Psssst'],
}

const ConversationStarters = ({ classes, starters, currentPersonName = [] }) => {
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
      {starters[currentPersonName] &&
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

const onPickMentor = mentor => {
  if (process.browser) {
    window.scrollTo({ top: 3000, left: 0, behavior: 'smooth' })
  }
}

export default ({ classes }) => {
  const [currentPersonId, setCurrentPerson] = useState(0)
  const mentor = people[currentPersonId]
  const length = 3
  const nextPerson = () => {
    setCurrentPerson((currentPersonId + 1) % length)
  }
  const previousPerson = () =>
    setCurrentPerson((length + currentPersonId - 1) % length)

  const triggerSticky = useScrollTrigger({
    target: process.browser ? window : undefined,
    // disableHysteresis: true,
    // threshold: 600,
  })

  const backToTop = useScrollTrigger({
    target: process.browser ? window : undefined,
    // disableHysteresis: true,
    threshold: 200,
  })

  return (
    <div style={{ backgroundColor: 'white', color: 'blue' }}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent></CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ProfilePicture mentorUrl={`${mentor}.jpg`}/>
          </div>

          <CardContent>
            <Typography gutterBottom variant="h2" component="h2">
              {upperCase(mentor)}
            </Typography>

            <Radar
              height={500}
              data={makeSinglePersonRadar(
                {
                  labels: Object.keys(peopleSkills[mentor]),
                  values: [Object.values(peopleSkills[mentor])],
                },
                [mentor],
              )}
            />
          </CardContent>
        </CardActionArea>
      </Card>

      <Slide in={triggerSticky}>
        <Button
          style={{
            position: 'sticky',
            marginTop: -100,
            top: 60,
            zIndex: 1000,
            width: '100%'
          }}
          size="large"
          variant="contained"
          color="primary"
          onClick={() => onPickMentor(people[currentPersonId])}
        >
          Pick {mentor}
        </Button>
      </Slide>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              Here&apos;s you and mentor {upperCase(people[currentPersonId])}
            </Typography>

            <Radar
              height={500}
              data={makeTwoPeopleRadar(comparePeople(mentor, 'felix'))}
            />
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              Here are great conversation starters for you and
              {' ' + upperCase(people[currentPersonId])}
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
        style={{
          position: 'fixed',
          bottom: 100,
          left: '5%',
        }}
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={previousPerson}
      >
        <NavigateBeforeIcon/>
      </Fab>
      <Fab
        style={{
          position: 'fixed',
          bottom: 100,
          left: '80%',
        }}
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={nextPerson}
      >
        <NavigateNextIcon/>
      </Fab>

      <Zoom
        in={backToTop}
      >
        <Fab
          color="secondary" size="small"
          onClick={() => {
            if (process.browser) {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            }
          }}
          style={{
            bottom: 20,
            left: '45%',
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

    </div>
  )
}
