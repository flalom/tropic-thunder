import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import fetch from 'isomorphic-fetch'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  card: {},
  cardDetails: {},
  cardMedia: {
    objectFit: 'cover',
    height: 140,
  },
})

function PostPage(props) {
  const { classes, post } = props

  return (
    <React.Fragment>
      <div className={classes.layout}>
        <Toolbar className={classes.toolbarMain}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Awesome Blog
          </Typography>
        </Toolbar>
        <main>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="data:image/svg+xmlcharset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EPicture%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
              title="Image title"
              height="140"
            />
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2">{post.title}</Typography>
                <Typography component="p">{post.body}</Typography>
              </CardContent>
            </div>
          </Card>
        </main>
      </div>
    </React.Fragment>
  )
}

PostPage.getInitialProps = async context => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.query.postId}`
  )
  if (response.ok) {
    const post = await response.json()
    return { post }
  }

  return []
}

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PostPage)
