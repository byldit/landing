import dynamic from 'next/dynamic';
import styled from 'styled-components';

//import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

import LazyImage from './LazyImage';
import CenterContent from '../containers/CenterContent';

const AppBar = dynamic(() => import('@material-ui/core/AppBar'));


const StyledImage = styled(LazyImage)`
  &&& {
    margin: 10px 0;
    width: 100px;
    margin:auto;
  }
`;

const Navbar = () => (
  <AppBar color="transparent" position="static">
    <Toolbar>
      <Grid  alignItems="center" container justify="center">
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <CenterContent>
            <StyledImage src="/static/images/byldicon.png" alt="byld icon" />
          </CenterContent>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

export default Navbar;