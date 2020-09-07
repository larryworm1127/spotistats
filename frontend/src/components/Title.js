import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


class Title extends React.Component {

  render() {
    return (
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {this.props.children}
      </Typography>
    );
  }
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
