import { Button, Dialog, DialogActions, DialogContent, DialogTitle, ListItemButton, ListItemText, Typography } from "@mui/material";
import { brown } from "@mui/material/colors";
import { useEffect, useState } from "react";

export default function FirstModal(props) {
    const [data, setData] = useState({})
    const str = props.card
    const newStr = str.substring(0, str.length - 5)
    useEffect(() => {
      async function fetchData() {
        const res = await fetch(`${process.env.REACT_APP_SERVER_HOST}/api/getCommentsData/?card=${newStr}`)
            .then(res => res)
            .catch(e => console.log(e.message))
        setData(await res.json())
    }
      fetchData()
    }, [newStr])
    console.log(data)
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleClick = (e) => {
        setOpen(true)
    }
    
    return(<>
        <ListItemButton onClick={handleClick}>
            <ListItemText primary={` \nНомер карты: ${newStr}`}></ListItemText>
        </ListItemButton>
    <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
    >
    <DialogTitle sx={{ m: 0 }} id="customized-dialog-title">
    </DialogTitle>
    <Typography id="modal-modal-description" sx={{textAlign: 'center'}}>
        Информация
    </Typography>
    <DialogContent dividers>
        <p>Номер карты: {newStr}</p>
        <p>Номер телефона: {data.number}</p>
        <p>Комментарий: {data.comment}</p> 
        <br/>
    </DialogContent>
    <DialogActions>
    <Button sx={{color: brown[400]}} size='small' variant='text' autoFocus onClick={handleClose}>
        Закрыть
    </Button>
    </DialogActions>
    </Dialog></>)
}