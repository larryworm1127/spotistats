export const auth = (comp) => {
  fetch("api/auth")
    .then(res => {
      if (res.status > 400) {
        return comp.setState(() => {
          return { placeholder: "Something went wrong!" };
        });
      }
      return res.json();
    })
    .then(json => {
      console.log(json);
      if (json) {
        comp.setState({
          name: json.name,
          authUrl: json.auth_url,
          loaded: true
        });
      }
    });
};


export const getTopArtists = (comp) => {
  fetch("api/top_artists")
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      console.log(json)
      if (json) {
        comp.setState({
          artists: [...json.items]
        })
      }
    })
}


export const getTopTracks = (comp) => {
  fetch("api/top_tracks")
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      console.log(json)
      if (json) {
        comp.setState({
          tracks: [...json.items]
        })
      }
    })
}
