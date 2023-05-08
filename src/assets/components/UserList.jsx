import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toast from '../components/Toast';

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
import { useEffect } from 'react';
import { getAllUsers } from '../../services/getAllUsers';

const theme = createTheme();

export default function UserList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState([]);

  // const data = {
  //   first_name: 'Andres',
  //   last_name: 'Bonilla',
  //   email: 'andy.cbr.ab@gmail.com',
  //   password: '123456',
  //   birthday: '1996-12-25',
  // };

  //Declaro constantes reactivas para los datos del form

  useEffect(() => {
    getAllUsers().then((data) => {
      setData(data);
    });
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toast />
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
                onClick={() => {
                  handleOpen();
                }}
                variant="contained"
                color="secondary"
                startIcon={<GroupAddIcon />}
              >
                Agregar Nuevo Usuario
              </Button>
            </Stack>
          </Container>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', px: 4, gap: 3 }}>
          {data.map((data) => (
            <UserCard key={data.id} index={data.id} data={data} />
          ))}
        </Box>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <UserForm cerrar={handleClose} />
          </Paper>
        </Container>
      </Modal>
    </ThemeProvider>
  );
}
