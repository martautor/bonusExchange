import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemButton, ListItemText, Modal, Typography } from "@mui/material"
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function AdminContent(props) {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const handleClick = (e) => {
        e.preventDefault()
        setOpen(true)
    }
    const render = () => {
        return (<List>
            {[1,2,3,4].map((value) => (
                <ListItem
                key={value}
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary={`Line item ${value}`}></ListItemText>
                    </ListItemButton>
                    <Dialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title"
                    primary={`Line item ${value}`}>
                        Окно проверки 
                    </DialogTitle>
                    <Typography id="modal-modal-description" sx={{ mt: 2, p: 3 }}>
                        Имя Фамилия Отчество
                    </Typography>
                    <DialogContent dividers>
                    <Typography gutterBottom>
                        Номер телефона:
                    </Typography>
                    <Typography gutterBottom>
                        Номер карты:
                    </Typography>
                    <Typography gutterBottom>
                        Фотография:
                    </Typography>
                    </DialogContent>
                    <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Закрыть
                    </Button>
                    </DialogActions>
                    </Dialog>
                </ListItem>
            ))}
        </List>)
    }

    return (<Container>
        <Typography variant="h7">
        User: {props.data.user}
        {render()}
        </Typography>
    </Container>)
}