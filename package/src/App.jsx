import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';
import { baselightTheme } from './theme/DefaultColors';
import { Toaster } from 'react-hot-toast';

function App() {
  const routing = useRoutes(Router); // Correct usage of useRoutes
  const theme = baselightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  );
}

export default App;