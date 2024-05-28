import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import { green, brown } from '@mui/material/colors';
import findData from '../functions/findData';

function Search() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();
  const buttonSx = {
    ...(!success ? {
      bgcolor: brown[400],
      '&:hover': {
        bgcolor: brown[700],
      },
      } : {
      bgcolor: brown[300],
      '&:hover': {
        bgcolor: brown[600],
      },
    }),
  };

  const [formData, setFormData] = useState({
    phone: ''
  });

  const handleChange = (e) => {
    setSuccess(false)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(formData.phone.length < 16) {
      return alert('Данные введены не правильно!')
    }
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      await findData(formData.phone)
        .then(res => {typeof res.message === 'string' ? navigate(`/notFinded`) : navigate(`/${formData.phone}`)})
        .catch(e => {
          if(e.message === 'Failed to fetch') {
            alert('Ведутся технические работы.\nПо вопросам писать на почту: bonus@pm26.ru')
          }
          setSuccess(true);
          setLoading(false);
        })
    }
    setSuccess(true);
    setLoading(false);
  };

  return (
    <Container maxWidth="sm" sx={{marginTop: 1, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignContent: 'center', justifyContent: 'flex-start'}}>
      <Typography variant="h6" gutterBottom sx={{textAlign: 'center', color: brown[400]}}>
        Для переноса введите пожалуйста ваш номер телефона
      </Typography>
      <form onSubmit={handleSubmit} style={{textAlign: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Box mb={2} sx={{alignContent: 'left'}}>
          <InputMask sx={{textAlign: 'left'}}
            mask="+7(999)999-99-99"
            value={formData.phone}
            onChange={handleChange}
            maskChar={null}
          >
            {() => (
              <TextField
                sx={{textAlign: 'left'}}
                fullWidth
                variant="outlined"
                label="Телефон"
                name="phone"
                color='grey'
                required
              />
            )}
          </InputMask>
        </Box>
        <Button variant="contained" type="submit" disabled={loading} sx={buttonSx}>
          Отправить {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '60%',
              left: '50%',
              marginTop: '-15px',
              marginLeft: '-12px',
            }}
          />)}
        </Button>
      </form>
    </Container>
  );
}

export default Search;