import React from "react";
import PropTypes, { number } from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Collapse from "@material-ui/core/Collapse";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { withStyles } from "@material-ui/core";
import { styles } from "./style";


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
    const { label, icon, selectedIndex, onSelectClick, indices, classes } = this.props;

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
            <ListItem
              button
              selected={selectedIndex === indices[0]}
              onClick={(event) => onSelectClick(event, indices[0])}
              className={classes.nested}
            >
              <ListItemIcon>
                <AssignmentIcon/>
              </ListItemIcon>
              <ListItemText primary="Short Term"/>
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === indices[1]}
              onClick={(event) => onSelectClick(event, indices[1])}
              className={classes.nested}
            >
              <ListItemIcon>
                <AssignmentIcon/>
              </ListItemIcon>
              <ListItemText primary="Medium Term"/>
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === indices[2]}
              onClick={(event) => onSelectClick(event, indices[2])}
              className={classes.nested}
            >
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
  icon: PropTypes.node.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelectClick: PropTypes.func.isRequired,
  indices: PropTypes.arrayOf(number).isRequired
};

export default withStyles(styles)(CollapseListItem);
