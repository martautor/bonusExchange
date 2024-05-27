
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import logo from '../img/logo.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function appBarData() {
    return (
      <Box>
        <List >
          {['Информация', 'Перенести карту', 'Как перенести?'].map((text, index) => {
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {index}
                <ListItemText primary={text} sx={{ml: 15}}/>
              </ListItemButton>
            </ListItem>
          })}
        </List>
        <Link to='/'>
            <IconButton edge="start" color="primary" aria-label="menu">
                <img src={logo} alt="logo" style={{width: 300}} />
            </IconButton>
        </Link>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, mr: 5, color: 'gold'}}>
          ПивМаркет <CloseIcon style={{ height: 15}}/> BonusMoney &nbsp;
        </Typography>
        <Link to="/" color="link" style={{ marginRight: 10, color: grey[500] }}>
            <hr />
            <Typography variant='h6'>&nbsp; &nbsp; Информация</Typography>
            <hr />
        </Link>
        <Link to="card" color="link" style={{ marginRight: 10, color: grey[500]}}>
            <hr />
            <Typography variant='h6'>&nbsp; &nbsp; Перенести карту</Typography>
            <hr />
        </Link>
        <Link to="card/how" color="link" style={{ marginRight: 10, color: grey[500]}}>
            <hr />
            <Typography variant='h6'>&nbsp; &nbsp; Как перенести?</Typography>
            <hr />
        </Link>
      </Box>
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
  
export default function ContentBarMobile() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  }
    return (
    <Stack spacing={2} style={{width: '100%'}}>
      <ThemeProvider theme={defaultTheme}>
        <AppBar position="static" color="primary" sx={{display: 'flex', flexDirection: 'row'}}>
          <Button onClick={toggleDrawer(true)} sx={{color: 'white'}}><MenuIcon/></Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {appBarData()}
          </Drawer>
        </AppBar>
      </ThemeProvider>
    </Stack>
)}