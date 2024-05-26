
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import logo from '../img/logo.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

function appBarLabel(label) {
    return (
      <Toolbar>
        <Link to='/'>
            <IconButton edge="start" color="primary" aria-label="menu">
                {/* <img src={logo} alt="logo" style={{width: '100%'}} /> */}
            </IconButton>
        </Link>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, mr: 5, color: 'wheat'}}>
            {label}
        </Typography>
      </Toolbar>
    );
  }
  
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#7b3f00',
      },
      link: {
        main: '#ffffff'
      }
    },
  });

export default function Footer() {
    return (
    <Stack spacing={2} sx={{ flexGrow: 1, position: 'absolute',
        "left": 0,
        "right": 0,
        "z-index": 0,
        width: '100%'}}>
      <ThemeProvider theme={defaultTheme}>
        <AppBar position="static" color="primary" sx={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center'}}>
          {appBarLabel('Помощь: bonus@pm26.ru')}
        </AppBar>
      </ThemeProvider>
    </Stack>
)}