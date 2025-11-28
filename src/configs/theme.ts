import { createTheme } from '@mui/material';
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: { root: { textTransform: 'none' } },
    },
    MuiTextField: { defaultProps: { size: 'small' } },
  },
});

export default theme;
