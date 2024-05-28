import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import { brown } from "@mui/material/colors";

export default function AdminFooter() {
  return (
    <Box
      sx={{ backgroundColor: brown[700],
        p: 5,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color={brown[300]} align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://pm26.ru/">
            www.pm26.ru
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
        <Typography variant="body2" color={brown[100]} align="center">
          {"Помощь и поддержка: bonus@pm26.ru"}
        </Typography>
      </Container>
    </Box>
  );
}