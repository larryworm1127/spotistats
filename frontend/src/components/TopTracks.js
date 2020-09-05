import React from "react";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Title from "./Title";


class TopTracks extends React.Component {

  millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  render() {
    const { timeRange, tracks } = this.props;

    return (
      <React.Fragment>
        <Title>Top Tracks - {timeRange}</Title>
        <Table size="small">
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
                    return (acc === "") ? curr.name : `${acc}, ${curr.name}`;
                  }, "")}
                </TableCell>
                <TableCell>{track.album.name}</TableCell>
                <TableCell>{this.millisToMinutesAndSeconds(parseInt(track.duration_ms))}</TableCell>
                <TableCell>{track.popularity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
  }
}

TopTracks.propTypes = {
  timeRange: PropTypes.string.isRequired,
  tracks: PropTypes.array.isRequired
};

export default TopTracks;
