import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Login from './pages/Login';
import Main from './pages/Main';
import PageNavigation from './pages/configuration/PageNavigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />,
          <Route path="/login" element={<Login />} />,
          <Route path="/configuration" element={<PageNavigation />} />,
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
