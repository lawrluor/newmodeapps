import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4db8a8',
      light: '#7dd4c6',
      dark: '#2a8a7d',
    },
    secondary: {
      main: '#ff8c5a',
      light: '#ffb088',
      dark: '#e66b3a',
    },
    background: {
      default: '#0f1419',
      paper: '#1a2028',
    },
    text: {
      primary: '#e8e8e8',
      secondary: '#a8b0b8',
    },
  },
  typography: {
    fontFamily: '"Arimo", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(26, 26, 26, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 10, 10, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
});

export default theme;
