import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import Footer from './components/footer';
import './App.css';

//Icon imports
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  paddingSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed"
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem'
    },
  },
});

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.paddingSpace} color="primary">
            At Rocket.io we are passionate about software
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris. Feugiat scelerisque varius morbi enim. Nisl nunc mi ipsum faucibus. Lectus quam id leo in vitae turpis. Scelerisque viverra mauris in aliquam sem. Arcu odio ut sem nulla pharetra diam sit amet. In hendrerit gravida rutrum quisque non tellus orci ac. Sit amet justo donec enim. Massa tincidunt dui ut ornare lectus. Mi eget mauris pharetra et.
          </Typography>
        </div>
        {/* It's ``, not '' */}
        <div className={`${classes.grid} ${classes.paddingSpace}`}>
          <Grid icon={<SecurityIcon style={{ fill: "#4360A6", height: "125", width: "125" }} />} title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{ fill: "#449A76", height: "125", width: "125" }} />} title="Reliable" btnTitle="Show me More" />
          <Grid icon={<TrendingUpIcon style={{ fill: "#D05B2D", height: "125", width: "125" }} />} title="Performant" btnTitle="Show me More" />
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExportIcon style={{ fill: "#5EA780", height: "125", width: "125" }} />} title="Modular" btnTitle="Show me More" />
          <Grid icon={<ComputerIcon style={{ fill: "#E69426", height: "125", width: "125" }} />} title="Multi-Platform" btnTitle="Show me More" />
          <Grid icon={<HttpIcon style={{ fill: "#2EA09D", height: "125", width: "125" }} />} title="Connected" btnTitle="Show me More" />
        </div>
        <div className={classes.paddingSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
