import { useState } from "react";
import { Button, Typography, Box, Container, TextField } from "@mui/material";
import { brown } from "@mui/material/colors";
import { useLoaderData
  // ,useNavigate 
} from "react-router-dom";
import checkData from "../functions/checkData";

const MAX_FILE_SIZE_MB = 5;
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/gif"];

const ImageFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState('')
  const data = useLoaderData()

  // const navigate = useNavigate()
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // File type validation
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setError("Недопустимый тип файла. Пожалуйста загружайте изображения следующих типов: JPEG, PNG, или GIF.");
      return;
    }

    // File size validation
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setError(
        `Размер файла превышает ${MAX_FILE_SIZE_MB} МБ. Пожалуйста, выберите файл меньшего размера.`
      );
      return;
    }

    setSelectedFile(file);
    setError(null);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("card", data.card)
      formData.append("phone", data.phone)
      formData.append("completed", true)
      formData.append("file", selectedFile)
      formData.append("comment", comment)
      await checkData(formData)
      .catch(e => {
        if(e.message === 'Failed to fetch') {
          alert('Ведутся технические работы.\nПо вопросам писать на почту: bonus@pm26.ru')
        }
      })
      console.log(formData.get('comment'))
      alert('Спасибо за обращение!')
      // navigate('/')
      window.location.assign('https://pm26.ru')
    } else {
      setError("Выберите файл");
    }
  };
  
  const handleChange = (e) => {
    setComment(e.target.value)
    console.log(comment)
  }
  return (<Container maxWidth="sm" sx={{marginTop: 1, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignContent: 'center', justifyContent: 'flex-start', alignItems: 'center'}}>
    <Typography variant="h6" gutterBottom sx={{textAlign: 'center', color: brown[400]}}>
        Приложите фотографию карты для того чтобы мы могли удостовериться в том что она ваша!
      </Typography>
    <Box p={3} border="1px dashed #ccc" borderRadius={8} textAlign="center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="image-file-input"
      />
      <label htmlFor="image-file-input">
        <Button variant='contained' component="span" color="inherit" sx={{color: brown[100], backgroundColor: brown[700]}}>
          Выберите фото
        </Button>
      </label>
      {selectedFile && (
        <div>
          <Typography variant="subtitle1" mt={2}>
            Выбранное фото: {selectedFile.name}
          </Typography>
          
        </div>
      )}
      {error && (
        <Typography variant="body2" color="error" mt={2}>
          {error}
        </Typography>
      )}
    </Box>
    <Typography sx={{ mb: 1}}>
      Доп. комментарий
    </Typography>
    <TextField
          onChange={handleChange}
          id="outlined-multiline-static"
          label="Комментарий"
          multiline
          color='grey'
          rows={5}
        />
    <Button
            variant="contained"
            color="inherit"
            sx={{width: '25vh',color: brown[100],backgroundColor: brown[500], mt: 2}}
            onClick={handleUpload}
            mt={2}
          >
            Отправить
          </Button>
  </Container>);
};

export default ImageFileUpload;