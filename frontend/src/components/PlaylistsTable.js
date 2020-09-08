import React from 'react';
import { TableBody, TableContainer, TableHead } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import PlaylistsTableRow from './PlaylistsTableRow';
import Title from './Title';
import PropTypes from 'prop-types';
import Loading from './Loading';


class PlaylistsTable extends React.Component {

  render() {
    const { playlists, loaded } = this.props;

    return (
      <React.Fragment>
        <Title>User Playlists</Title>
        {loaded ?
          <TableContainer>
            <Table>
              <TableHead>
                <TableCell/>
                <TableCell>Name</TableCell>
                <TableCell>Public</TableCell>
                <TableCell>Num Tracks</TableCell>
                <TableCell>Collaborative</TableCell>
              </TableHead>
              <TableBody>
                {playlists.map((playlist) => (
                  <PlaylistsTableRow playlist={playlist} key={playlist.id}/>
                ))}
              </TableBody>
            </Table>
          </TableContainer> :
          <Loading/>
        }
      </React.Fragment>
    );
  }
}

PlaylistsTable.PropTypes = {
  playlists: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired
};

export default PlaylistsTable;
