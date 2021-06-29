import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import ActionBar from '../components/elements/ActionBar';
import Article from '../components/elements/Article';
import Hero from '../components/elements/Hero'
import LazyImage from '../components/elements/LazyImage';

import ActionBarNewsletter from '../forms/ActionBarNewsletter';

const StyledImage = styled(LazyImage)`
&&& {
  margin: auto;
  width: 80%;
}
`;

const Home = () => (
  <>
    <Grid item xs={12}>
      <StyledImage src="/static/images/justbyld.png" alt="BYLD" />
    </Grid>
    <Grid item xs={12}>
      <ActionBarNewsletter />
    </Grid>
  </>    
);

export default Home;
