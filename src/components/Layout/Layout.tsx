import React, { ReactElement, ReactChildren } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  content: {
    flexGrow: 1,
  },
});

interface LayoutProps {
  location: { pathname: string };
  children: ReactChildren;
}

const Layout = (props: LayoutProps): ReactElement => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet>
        <html lang="en" />
      </Helmet>

      <div className={classes.container}>
        <Header location={props.location} />

        <div className={classes.content}>
          <PageTransition location={location}>{props.children}</PageTransition>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
