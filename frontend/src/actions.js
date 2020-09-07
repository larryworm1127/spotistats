export const auth = (comp) => {
  fetch('api/auth')
    .then(res => {
      if (res.status > 400) {
        return comp.setState(() => {
          return { placeholder: 'Something went wrong!' };
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


export const getTopArtists = (comp, timeRange) => {
  fetch(`api/top_artists/${timeRange}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      console.log(json);
      if (json) {
        comp.setState({
          artists: [...json.items],
          loaded: true
        });
      }
    });
};


export const getTopTracks = (comp, timeRange) => {
  fetch(`api/top_tracks/${timeRange}`)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      console.log(json);
      if (json) {
        comp.setState({
          tracks: [...json.items],
          loaded: true
        });
      }
    });
};


export const getPlaylists = (comp) => {
  fetch("api/playlists")
    .then(res => {
      if (res.status === 200) {
        return res.json()
      }
    })
    .then(json => {
      if (json) {
        comp.setState({
          playlists: [...json.items],
          loaded: true
        })
      }
    })
}
