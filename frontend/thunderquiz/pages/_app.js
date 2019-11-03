import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import Nav from '../components/nav.js'

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

const Theme = props => {
  const classes = useStyles()
  return <div>{props.children(classes)}</div>
}

export default class BlogApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  renderHead() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
      </Head>
    )
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Theme>
        {classes => (
          <React.Fragment>
            <Nav classes={classes}></Nav>
            {this.renderHead()}
            <CssBaseline />
            <div style={{ marginTop: '3em' }}>
              <Component {...pageProps} classes={classes} />
            </div>
          </React.Fragment>
        )}
      </Theme>
    )
  }
}
