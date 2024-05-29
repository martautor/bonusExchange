
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
import { Box, Button } from '@mui/material';
function appBarData() {
  const handleQuit = () => {
    localStorage.setItem('logged', 0)
    window.location.reload()
}
    return (
      <Toolbar sx={{display: 'flex', flexDirection: 'row', width: '150vw', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Link to='/'>
        <IconButton edge="start" color="primary" aria-label="menu">
            <img src={logo} alt="logo" style={{width: 100}} />
        </IconButton>
        </Link>
        <Typography variant="h6" noWrap component="div" sx={{ color: 'wheat', alignSelf: 'center'}}>
        ADMIN <CloseIcon style={{ height: 15}}/> PANEL &nbsp;
        </Typography>
        </Box>
        
        
        <Typography variant="h6" noWrap component="div" sx={{ color: 'wheat'}}>
          User: {localStorage.getItem('user')} &nbsp;
          <Button variant='contained' onClick={handleQuit} sx={{backgroundColor: brown[400], width: 'auto'}}>Выйти</Button>
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