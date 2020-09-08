import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Title from './Title';
import { millisToMinutesAndSeconds } from '../actions';
import Loading from './Loading';


class TopTracks extends React.Component {

  render() {
    const { timeRange, tracks, loaded } = this.props;

    return (
      <React.Fragment>
        <Title>Top Tracks - {timeRange}</Title>
        {loaded ?
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Song Name</TableCell>
                <TableCell>Artist Name</TableCell>
                <TableCell>Album Name</TableCell>
                <TableCell>Song Length</TableCell>
                <TableCell>Popularity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tracks.map((track, index) => (
                <TableRow key={track.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{track.name}</TableCell>
                  <TableCell>
                    {track.artists.reduce((acc, curr) => {
                      return (acc === '') ? curr.name : `${acc}, ${curr.name}`;
                    }, '')}
                  </TableCell>
                  <TableCell>{track.album.name}</TableCell>
                  <TableCell>{millisToMinutesAndSeconds(parseInt(track.duration_ms))}</TableCell>
                  <TableCell>{track.popularity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> :
          <Loading/>
        }
      </React.Fragment>
    );
  }
}

TopTracks.propTypes = {
  timeRange: PropTypes.string.isRequired,
  tracks: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired
};

export default TopTracks;
