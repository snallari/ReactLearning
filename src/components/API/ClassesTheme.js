import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles';

const ClassesTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#8fc7f7',
    },
    secondary: {
      main: "#ff9900",
    },
    error: {
      main: "#ff0000",
    },
    background: {
        paper: '#fff',
        default: '#7cbbf2'
    },
    backgroundColor: {
        paper: '#fff',
        default: '#7cbbf2'
    }
  },
  typography: {
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  overrides: {
    typography: {
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
      }
  },
 
});

export default ClassesTheme
