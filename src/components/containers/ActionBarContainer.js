import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const ActionBarContainer = ({ children }) => (
  <Box bgcolor="primary.dark">
    <Grid container alignItems="center" justify="center">
      {children}
    </Grid>
  </Box>
);

ActionBarContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActionBarContainer;
