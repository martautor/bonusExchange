
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from '../img/logo.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { brown, grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function appBarData() {
    return (
      <Box sx={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        <Link to='/'>
            <IconButton edge="start" color="primary" aria-label="menu">
                <img src={logo} alt="logo" style={{width: 200}} />
            </IconButton>
        </Link>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 0, color: 'gold'}}>
        &nbsp;ПивМаркет <CloseIcon style={{ height: 15}}/> BonusMoney &nbsp;
        </Typography>
        <Link to="/" color="link" style={{ marginRight: 10, color: grey[500]}}>
            <hr />
            <Typography variant='h6'>Перенести карту</Typography>
            <hr />
        </Link>
        <Link to="how" color="link" style={{ marginRight: 10, color: grey[500]}}>
            <hr />
            <Typography variant='h6'>Как перенести?</Typography>
            <hr />
        </Link>
      </Box>
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
  
export default function ContentBarMobile() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }
    return (
    <Stack spacing={5}>
      <ThemeProvider theme={defaultTheme}>
        <AppBar position="static" color="primary" sx={{display: 'flex', flexDirection: 'row', p: 1}}>
          <Button onClick={toggleDrawer(true)} sx={{color: 'white'}}><MenuIcon fontSize='large'/></Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {appBarData()}
          </Drawer>
        </AppBar>
      </ThemeProvider>
    </Stack>
)}