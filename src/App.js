import { AppBar, Card, CardActionArea, CardContent, CardMedia, Container, Drawer, Grid, IconButton, Toolbar, Tooltip, Typography } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';
import SettingsBrightnessIcon from '@material-ui/icons/Brightness6';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import { BrowserRouter, Link as RouterLink, Route, Switch } from 'react-router-dom';
import './App.css';
import { Blockchain, Hashing, Mining, Sample, Technology } from './Blockchain.js';
import Economics from './Economics.js';
import blockchainImg from './imgs/blockchain.jpg';
import economyImg from './imgs/economics.jpg';

const urlMap = {
  '/': 'Cryptorial',
  '/technology': 'Technology',
  '/technology/blockchain': 'Blockchain',
  '/technology/mining': 'Mining',
  '/technology/hashing': 'Hashing',
  '/technology/sample': 'Sample Blockchain',
  '/economics': 'Economics',
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginRight: -drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = urlMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const darkmode = createMuiTheme({
    palette: {
      type: "dark",
    }
  });

  const lightmode = createMuiTheme({
    palette: {
      type: "light",
    }
  })

  const [isDark, setDark] = React.useState(true);

  const handleDrawerOpen = () => {
    setMenuOpen(true);
  };

  const handleDrawerClose = () => {
    setMenuOpen(false);
  };

  const switchDarkMode = () => {
    setDark(!isDark);
  }

  return (
    <ThemeProvider theme={isDark ? darkmode : lightmode}>
      <CssBaseline />
      <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>

        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            color='inherit'
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: menuOpen,
            })}
          >

<Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, menuOpen && classes.hide)}
              >
                <MenuIcon />
              </IconButton>

            <Container>

            

              <Route>
                {({ location }) => {
                  const pathnames = location.pathname.split('/').filter((x) => x);

                  if (location.pathname === "/") {
                    return <p style={{ flexGrow: 1, float: "left"}}></p>;
                  }

                  return (
                    <Breadcrumbs style={{ flexGrow: 1, float: "left"}} className="crumbs" aria-label="breadcrumb">
                      <LinkRouter color="inherit" to="/">


                        <Typography color="textPrimary" >
                          Cryptorial
                  </Typography>
                      </LinkRouter>
                      {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return last ? (
                          <Typography color="secondary" key={to}>
                            {urlMap[to]}
                          </Typography>
                        ) : (
                            <LinkRouter color="inherit" to={to} key={to}>
                              {urlMap[to]}
                            </LinkRouter>
                          );
                      })}
                    </Breadcrumbs>
                  );
                }}
              </Route>

              </Container>

              <Tooltip title={(isDark ? "Light mode" : "Dark mode")}>
                <IconButton
                style={{float: "right"}}
                  color="inherit"
                  aria-label="Switch theme"
                  onClick={switchDarkMode}
                  className={clsx(classes.menuButton, menuOpen && classes.hide)}
                >
                  <SettingsBrightnessIcon />
                </IconButton>
              </Tooltip>
              

            </Toolbar>
            
          </AppBar>


          <Drawer
            className={classes.drawer}
            anchor="left"
            open={menuOpen}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>

              <ListItemLink to="/" onClick={() => setMenuOpen(false)} />

              <ListItemLink to="/technology" onClick={() => setMenuOpen(false)} />

              <List disablePadding>
                <ListItemLink to="/technology/blockchain" className={classes.nested} onClick={() => setMenuOpen(false)} />
                <ListItemLink to="/technology/hashing" className={classes.nested} onClick={() => setMenuOpen(false)} />
                <ListItemLink to="/technology/mining" className={classes.nested} onClick={() => setMenuOpen(false)} />
                <ListItemLink to="/technology/sample" className={classes.nested} onClick={() => setMenuOpen(false)} />
              </List>


              <ListItemLink to="/economics" onClick={() => setMenuOpen(false)} />
            </List>
            <Divider />
          </Drawer>

          <Container style={{ paddingTop: '100px', paddingBottom: '200px' }} className={clsx(classes.content, { [classes.contentShift]: menuOpen, })}>
            <Switch>
              <Route exact path="/" component={Home}  />
              <Route path="/technology/blockchain" component={Blockchain} />
              <Route path="/technology/hashing" component={Hashing} />
              <Route path="/technology/mining" component={Mining} />
              <Route path="/technology/sample" component={Sample} />
              <Route path="/technology" component={Technology} />
              <Route path="/economics" component={() => <Economics isDark={isDark}/>} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <div>
      <Typography variant='h2' color='primary' style={{ textAlign: 'center', marginTop: '80px' }}>
        Cryptorial
      </Typography>

      <Typography variant='h6' color='textSecondary' style={{ textAlign: 'center', marginBottom: '60px' }}>
        learn cyrpto
      </Typography>

      <Typography variant="body1" style={{ marginBottom: '20px' }}> Cryptocurrencies and other blockchain technologies have gained tremendous popularity in the last few years.
      Cryptocurrencies are currencies that are completely digital, having no controlling local authority. Instead, the transactions
      are handled by a public distributed ledger called a blockchain. Due to the security and anonymity provided by cryptocurrencies, their monitary value
      has increased drastically, and is now traded by investors just like stocks. This application will teach you the basics of blockchain and the cryptocurrency market.
      To fully understasnd cryptocurrencies, there are two main portions that need to be understood:
      </Typography>

      <Grid container alignItems="stretch">
        <Grid item component={Card} style={{ margin: 16 }} md >
          <CardActionArea >
            <RouterLink to="/technology" style={{ textDecoration: 'none', color: 'inherit'}}>
              <CardMedia
                style={{ height: 200 }}
                image={blockchainImg}
                title="Technology"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Technology
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This section will teach you the basics of mining cryptocurrencies and blockchain, the technologies that cryptocurrencies are built upon.
                </Typography>
              </CardContent>
            </RouterLink>
          </CardActionArea>
        </Grid>

        <Grid item component={Card} style={{ margin: 16 }} md>
          <CardActionArea>
            <RouterLink to="/economics" style={{ textDecoration: 'none', color: 'inherit' }}>

              <CardMedia
                style={{ height: 200 }}
                title="Economics"
                image={economyImg}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Economics
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  This section introduces the economics of cryptocurrencies including an index of existing cryptocurrencies, and definitions of some of the most used terms.
               </Typography>
              </CardContent>
            </RouterLink>
          </CardActionArea>
        </Grid>
      </Grid>

    </div>);
}

export default App;
