
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from '../../img/logo.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { brown } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
function appBarData() {
    return (
      <Toolbar>
        <Link to='/'>
            <IconButton edge="start" color="primary" aria-label="menu">
                <img src={logo} alt="logo" style={{width: 100}} />
            </IconButton>
        </Link>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, mr: 5, color: 'wheat'}}>
          ADMIN <CloseIcon style={{ height: 15}}/> PANEL &nbsp;
        </Typography>
      </Toolbar>
    );
  }
  
  const defaultTheme = createTheme({
    palette: {
      primary: {
        main: brown.A700,
      },
      link: {
        main: '#ffffff'
      }
    },
  });

export default function AdminBar() {
    return (
    <Stack spacing={2} sx={{ flexGrow: 0}}>
      <ThemeProvider theme={defaultTheme}>
        <AppBar position="static" color="primary" sx={{display: 'flex', flexDirection: 'row'}}>
          {appBarData()}
        </AppBar>
      </ThemeProvider>
    </Stack>
)}