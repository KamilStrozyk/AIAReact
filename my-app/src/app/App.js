import React from 'react';
import './App.css';
import Navbar from '../components/Navbar';
import MovieTable from '../components/MovieTable';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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
        <MovieTable />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
