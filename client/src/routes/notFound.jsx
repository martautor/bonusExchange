import React from "react";
import '../css/notFound.css'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="error-container">
      <h1>404 Error - Страница не найдена</h1>
      <p>Извините, запрашиваемая вами страница не найдена. Пожалуйста, проверьте правильность URL адреса.</p>
      <Button variant="outlined" sx={{color: 'red'}} color="error"> <Link to='/'>Назад</Link> </Button>
    </div>
  );
};

export default NotFoundPage;