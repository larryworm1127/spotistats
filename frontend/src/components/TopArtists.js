import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Title from './Title';
import PropTypes from 'prop-types';


class TopArtists extends React.Component {

  render() {
    const { timeRange, artists } = this.props;

    return (
      <React.Fragment>
        <Title>Top Artists - {timeRange}</Title>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Artist Name</TableCell>
              <TableCell>Top Genre</TableCell>
              <TableCell>Followers</TableCell>
              <TableCell>Popularity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artists.map((artist, index) => (
              <TableRow key={artist.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{artist.name}</TableCell>
                <TableCell>{artist.genres[0]}</TableCell>
                <TableCell>{artist.followers.total}</TableCell>
                <TableCell>{artist.popularity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

TopArtists.propTypes = {
  timeRange: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired
};

export default TopArtists;
