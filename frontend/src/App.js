import React from "react";
import { auth } from "./actions";
import Home from "./components/Home";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Login from "./components/Login";


const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 500
    }
  }
});


class App extends React.Component {

  state = {
    name: null,
    authUrl: null,
    loaded: false,
    placeholder: "Loading"
  };

  componentDidMount() {
    auth(this);
  }

  render() {
    const { authUrl } = this.state;

    return (
      <ThemeProvider theme={theme}>
        {(authUrl) ? <Login authUrl={authUrl}/> : <Home/>}
      </ThemeProvider>
    );
  }
}

export default App;
