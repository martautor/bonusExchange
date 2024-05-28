import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { green, brown } from '@mui/material/colors';

function Form(props) {
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
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  const [formData, setFormData] = useState({
    card: ''
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
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      navigate(`/card/${props.data.customer.login}/${formData.card}/confirmation`)
      setSuccess(true);
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{marginTop: 1, display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignContent: 'center', justifyContent: 'flex-start'}}>
      <Typography variant="h6" gutterBottom sx={{textAlign: 'center', color: brown[400]}}>
        Введите пожалуйста номер вашей карты
      </Typography>
      <form onSubmit={handleSubmit} style={{textAlign: 'center', alignContent: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Box mb={2} sx={{alignContent: 'left'}}>
            <TextField
            sx={{textAlign: 'left'}}
            fullWidth
            variant="outlined"
            label="Номер штрих-кода на карте или его номер"
            name="card"
            color='grey'
            onChange={handleChange}
            required
            />
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

export default Form;