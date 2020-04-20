import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../components/Navbar';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#2196f3',
    },
  },
});


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
      <Navbar />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
