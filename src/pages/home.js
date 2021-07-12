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
  margin: 120px auto;
}
`;

const Container = styled.div`
  display: block;
  background-image: url('/static/images/wave.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: calc(100% - 78px);
  position: absolute;
  width: 100%;
`;

const Home = () => (
  <Container>
    <Grid item xs={12}>
      <ComingSoon src="/static/images/coming_soon.svg" alt="BYLD" />
    </Grid>
    <Footer />
  </Container>    
);

export default Home;
