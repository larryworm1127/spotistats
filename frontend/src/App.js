import React from "react";


class App extends React.Component {

  state = {
    name: null,
    authUrl: null,
    loaded: false,
    placeholder: "Loading"
  };

  componentDidMount() {
    fetch("api/auth")
      .then(res => {
        if (res.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return res.json();
      })
      .then(json => {
        console.log(json)
        if (json) {
          this.setState({
            name: json.name,
            authUrl: json.auth_url,
            loaded: true
          });
        }
      });
  }

  render() {
    const { authUrl, name } = this.state;

    return (
      <div>
        {(authUrl) && <h2><a href={authUrl}>Sign in</a></h2>}

        {(name) && (
          <div>
            <h2>Hi {name}, <small><a href="/sign_out">[sign out]</a></small></h2>

            <a href="/api/playlists">my playlists</a> |
            <a href="/api/top_artists">top artists</a> |
            <a href="/api/top_tracks">top tracks</a> |
            <a href="/api/current_user">me</a>
          </div>
        )}
      </div>
    );
  }
}

export default App;
