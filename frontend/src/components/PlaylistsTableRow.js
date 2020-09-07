import React from 'react';
import { TableRow } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';


class PlaylistsTableRow extends React.Component {

  state = {
    open: false
  };

  setOpen = (value) => {
    this.setState({
      open: value
    });
  };

  render() {
    const { open } = this.state;
    const { playlist } = this.props;

    return (
      <React.Fragment>
        <TableRow>
          <TableCell>
            <IconButton size="small" onClick={() => this.setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>
          </TableCell>
          <TableCell>{playlist.name}</TableCell>
          <TableCell>{playlist.public.toString()}</TableCell>
          <TableCell>{playlist.tracks.total}</TableCell>
          <TableCell>{playlist.collaborative.toString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Tracks
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>

                    </TableRow>
                  </TableHead>
                  <TableBody>

                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
}

export default PlaylistsTableRow;
