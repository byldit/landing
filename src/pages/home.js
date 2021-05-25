import Grid from '@material-ui/core/Grid';
import ActionBar from '../components/elements/ActionBar';
import Article from '../components/elements/Article';
import Hero from '../components/elements/Hero'
import ActionBarNewsletter from '../forms/ActionBarNewsletter';

const Home = () => (
  <>
    <Grid item xs={12}>
      <Hero />
    </Grid>
    <Grid item xs={12}>
      <ActionBar />
    </Grid>
    <Grid item xs={12}>
      <Article />
    </Grid>
    <Grid item xs={12}>
      <ActionBarNewsletter />
    </Grid>
  </>    
);

export default Home;
