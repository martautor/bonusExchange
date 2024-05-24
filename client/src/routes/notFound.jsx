import React from "react";
import '../css/notFound.css'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="error-container">
      <h1>404 Error - Страница не найдена</h1>
      <p>Извините, запрашиваемая вами страница не найдена. Пожалуйста, проверьте правильность URL адреса.</p>
      <Link to='/'><Button variant="outlined" sx={{color: 'red'}} color="error"> Назад </Button></Link>
    </div>
  );
};

export default NotFoundPage;