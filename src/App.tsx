import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Ratings } from 'pages';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Ratings />
    </ThemeProvider>
  );
}
