

import dynamic from 'next/dynamic';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';

import ActionBarContainer from '../components/containers/ActionBarContainer';
import CenterContent from '../components/containers/CenterContent';

const Newsletter = dynamic(() => import("./NewsletterForm"));

const ActionBarNewsletter = () => (
  <ActionBarContainer>
    <Box padding={4}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <CenterContent>
            <Typography variant="h4">
              <Box color="primary.contrastText">
                  For updates, sign up for the BYLD newsletter
              </Box>
            </Typography>
          </CenterContent>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" justify="center">
          <Newsletter />
        </Grid>
      </Grid>
    </Box>
  </ActionBarContainer>
);

export default ActionBarNewsletter;