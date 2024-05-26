
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from '../img/logo.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
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
          ПивМаркет <CloseIcon style={{ height: 15}}/> BonusMoney &nbsp;
        </Typography>
        <Link to="/" color="link" style={{ marginRight: 10, color: grey[300] }}>
            <Typography variant='h6'>Информация</Typography>
        </Link>
        &nbsp;• &nbsp;
        <Link to="card" color="link" style={{ marginRight: 10, color: grey[300]}}>
            <Typography variant='h6'> Перенести карту</Typography>
        </Link>
        &nbsp;• &nbsp;
        <Link to="card/how" color="link" style={{ marginRight: 10, color: grey[300]}}>
            <Typography variant='h6'> Как перенести?</Typography>
        </Link>
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

export default function ContentBar() {
    return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={defaultTheme}>
        <AppBar position="static" color="primary" sx={{display: 'flex', flexDirection: 'row'}}>
          {appBarData()}
        </AppBar>
      </ThemeProvider>
    </Stack>
)}