import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";


class CollapseListItem extends React.Component {

  state = {
    open: false
  };

  handleClick = () => {
    this.setState(({ open }) => {
      return { open: !open };
    });
  };

  render() {
    const { open } = this.state;
    const { label, icon } = this.props;

    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={label}/>
          {open ? <ExpandLess/> : <ExpandMore/>}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon/>
              </ListItemIcon>
              <ListItemText primary="Short Term"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon/>
              </ListItemIcon>
              <ListItemText primary="Medium Term"/>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon/>
              </ListItemIcon>
              <ListItemText primary="Long Term"/>
            </ListItem>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

CollapseListItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

export default CollapseListItem;
