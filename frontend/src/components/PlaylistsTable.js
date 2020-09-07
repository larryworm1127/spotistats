import React from 'react';
import { TableBody, TableContainer, TableHead } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import PlaylistsTableRow from './PlaylistsTableRow';
import Title from './Title';


class PlaylistsTable extends React.Component {

  render() {
    const { playlists } = this.props;

    return (
      <React.Fragment>
        <Title>User Playlists</Title>
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
                <PlaylistsTableRow playlist={playlist}/>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

export default PlaylistsTable;
