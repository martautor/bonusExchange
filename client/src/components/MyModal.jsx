import { Button, Dialog, DialogActions, DialogContent, DialogTitle, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import getCurrentNumber from "../functions/getCurrentNumber";
import ImageGallery from "./ImageGallery";
import { brown } from "@mui/material/colors";
import getUserData from "../functions/getUserData";

export default function MyModal({card, value}) {
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleClick = (e) => {
        setOpen(true)
    }
    const [file, setFile] = useState('')
    const [data, setData] = useState('')
    useEffect(() => {
        async function fetchData() {
          const response = await getCurrentNumber(card)
          const blob = await response.blob()
          const newImage = URL.createObjectURL(blob)
          setFile(newImage)
          const json = await getUserData(card)
          setData(json)
        }
        fetchData()
        setLoading(false)
      }, [card]);
    // console.log(globalData)
    return(<>
        <ListItemButton onClick={handleClick}>
            [{value}]<ListItemText primary={` \nНомер карты: ${card}`}></ListItemText>
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
    <Typography gutterBottom>
        Номер телефона: {data.phone}
    </Typography>
    <Typography gutterBottom>
        Номер карты: {card}
    </Typography>
    <Typography gutterBottom>
        Фотография: 
        <Button>
            <ImageGallery src={file}/>
        </Button>
        {/* <img src={Image.src} alt="card"/> */}
    </Typography>
    </DialogContent>
    <DialogActions>
    <Button sx={{color: brown[400]}} size='small' variant='text' autoFocus onClick={handleClose}>
        Закрыть
    </Button>
    </DialogActions>
    </Dialog></>)
}