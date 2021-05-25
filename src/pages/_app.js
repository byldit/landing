import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';

import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import { useStore } from '../store';
import Footer from '../components/elements/Footer';
import Navbar from '../components/elements/Navbar';
import { WEBSITE_NAME } from '../constants/constants';
import { darkTheme, lightTheme } from '../components/elements/theme';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const App = ({Component, pageProps}) => {
  const store = useStore(pageProps.initialReduxState);
  const classes = useStyles();
  const { value } = useDarkMode(true);
  return (
    <Provider store={store}>
      <Head>
        <title>{WEBSITE_NAME}</title>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"/>
        <meta property="og:title" content="Next JS Starter" key="title" />
      </Head>
      <ThemeProvider theme={ value ? darkTheme : lightTheme }>
        <CssBaseline />
        <Grid className={classes.root} container>
          <Navbar />
          <Component {...pageProps}/>
          <Footer />
        </Grid>
      </ThemeProvider>
    </Provider>
  );
};

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
