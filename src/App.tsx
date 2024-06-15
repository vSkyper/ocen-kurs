import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CourseDetails, Ratings } from 'pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Ratings />,
    },
    {
      path: '/:courseId',
      element: <CourseDetails />,
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
