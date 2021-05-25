import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import DateCountdown from "./DateCountdown";
import Typography from '@material-ui/core/Typography';

const ActionBar = () => (
  <Box bgcolor="primary.dark">
    <Grid container alignItems="center" justify="center">
      <Box padding={4}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12}>
            <Box color="primary.contrastText">
              <DateCountdown/>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container alignItems="center" justify="center">
              <Box color="primary.contrastText">
                <Typography variant="h5">
                  A new way to play lasertag. Coming Soon...
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  </Box>
);

export default ActionBar;
