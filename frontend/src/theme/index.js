import { createMuiTheme } from '@material-ui/core';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

import typography from './typography';
import overrides from './overrides';

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: green,
  },
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
