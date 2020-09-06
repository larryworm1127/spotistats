import React from "react";
import './Login.css'


class Login extends React.Component {

  render() {
    const { authUrl } = this.props;

    return (
      <div className="text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <h1 className="cover-heading">Spotistats</h1>
          <p className="lead">
            Spotistats is a simple website for viewing top artists/tracks you have been listening to on Spotify.
          </p>
          <p className="lead">
            <a href={authUrl} className="btn btn-lg btn-secondary">Sign In</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
