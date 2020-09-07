import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';
import { loginStyles } from './style';
import { Typography, withStyles } from '@material-ui/core';


class Login extends React.Component {

  render() {
    const { authUrl, classes } = this.props;

    return (
      <div className={classes.bodyContainer}>
        <div className={classes.coverContainer}>
          <Typography component="h1" className={classes.coverHeading}>
            Spotistats
          </Typography>
          <Typography component="p" className={classes.lead}>
            Spotistats is a simple website for viewing top artists/tracks you have been listening to on Spotify.
          </Typography>
          <p className={classes.lead}>
            <Button size="large" href={authUrl} className={classes.signInButton}>Sign In</Button>
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyles)(Login);
