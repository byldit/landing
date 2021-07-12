//import dynamic from 'next/dynamic';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { styled as muiStyled } from '@material-ui/core/styles';

import LazyImage from './LazyImage';
import CenterContent from '../containers/CenterContent';

import { colors } from '../../constants/palette';

//const AppBar = dynamic(() => import('@material-ui/core/AppBar'));

const StyledImage = styled(LazyImage)`
  &&& {
    width: 100px;
    margin:auto;
  }
`;

/*const StyledAppBar = muiStyled(AppBar)({
  background: colors.DARK_BLUE,
});*/

const StyledAppBar = styled(AppBar)`
  background-color: ${colors.DARK_BLUE};
`;


const Navbar = () => (
  <StyledAppBar position="sticky">
    <Toolbar>
      <Grid alignItems="center" container justify="center">
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <CenterContent>
            <StyledImage src="/static/images/byldicon.svg" alt="byld icon" />
          </CenterContent>
        </Grid>
      </Grid>
    </Toolbar>
  </StyledAppBar>
);

export default Navbar;