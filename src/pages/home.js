import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import ActionBar from '../components/elements/ActionBar';
import Article from '../components/elements/Article';
import Footer from '../components/elements/Footer';

import Hero from '../components/elements/Hero'
import LazyImage from '../components/elements/LazyImage';

import ActionBarNewsletter from '../forms/ActionBarNewsletter';

const ComingSoon = styled(LazyImage)`
&&& {
  margin: 24px auto;
  width: 80%;
}
`;

const Container = styled.div`
  background-image: url('/static/images/wave.svg');
  height: 100%;
  width: 100%;
`;

const Home = () => (
  <Container>
    <Grid item xs={12}>
      <ComingSoon src="/static/images/coming_soon.svg" alt="BYLD" />
    </Grid>
    <Grid item xs={12}>
    </Grid>
    <Footer />
  </Container>    
);

export default Home;
