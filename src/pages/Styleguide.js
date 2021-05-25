
import Article from '../components/elements/Article';
import Grid from '@material-ui/core/Grid';
import Hero from '../components/elements/Hero';
import ActionBar from '../components/elements/ActionBar';


const Styleguide = () => (
    <Grid item xs={12}>
        <Hero />
        <Article /> 
        <ActionBar/>
    </Grid>
);

export default Styleguide;