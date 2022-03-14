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
      if (json) {
        comp.setState({
          tracks: [...json.items],
          loaded: true
        });
      }
    });
};


export const getPlaylists = (comp) => {
  fetch('api/playlists')
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then(json => {
      if (json) {
        comp.setState({
          playlists: [...json],
          loaded: true
        });
      }
    });
};


export const millisToDisplayTime = (millis) => {
  let hours = null;
  if (millis > 3600000) {
    hours = Math.floor(millis / 3600000);
  }
  const remain = (hours === null) ? millis : millis % 3600000;
  const minutes = Math.floor(remain / 60000);
  const seconds = ((remain % 60000) / 1000).toFixed(0);

  if (hours === null) {
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  } else {
    return hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
};
