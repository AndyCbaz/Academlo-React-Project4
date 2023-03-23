import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { UserCard } from './UserCard';
import Modal from '@mui/material/Modal';
import UserForm from './UserForm';
import { Paper } from '@mui/material';

const theme = createTheme();

export default function UserList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Declaro constantes reactivas para los datos del form
  const initialData = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    birthday: '',
  };
  const [data, setData] = useState(initialData);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <AccountCircleIcon sx={{ mr: 1 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Lista de Usuarios
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Academlo Entregable 4
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" justifyContent="end">
              <Button
                onClick={handleOpen}
                variant="contained"
                color="secondary"
                startIcon={<GroupAddIcon />}
              >
                Agregar Nuevo Usuario
              </Button>
            </Stack>
          </Container>
        </Box>
        <UserCard />
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <UserForm handleclose={handleClose} setdata={setData} />
          </Paper>
        </Container>
      </Modal>
    </ThemeProvider>
  );
}
