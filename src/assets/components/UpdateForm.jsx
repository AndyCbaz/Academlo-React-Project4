import { Box, Divider } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import ConstructionIcon from '@mui/icons-material/Construction';

import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import useForm from '../../hooks/useForm';
import { initialValues } from '../../helpers/formProps';
import { updateUser } from '../../services/updateUser';

const UpdateUser = ({ cerrar, index }) => {
  const { form, handleChange, handleSubmit } = useForm(initialValues);

  const handleUpdateUser = () => {
    updateUser(
      form.first_name,
      form.last_name,
      form.email,
      form.password,
      form.birthday,
      index,

    ).then((data) => {
      console.log(data);
    });

    cerrar();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Input de nombre */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 2,
              gap: 1,
            }}
          >
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              Editar Usuario
            </Typography>
            <Divider />
            {/* INPUT NOMBRE */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'start', flexGrow: 1 }}>
                <Typography variant="body1">Nombre </Typography>
              </Box>
              <Input
                sx={{
                  px: 1,
                  background: '#C5C2FA',
                  borderRadius: 4,
                }}
                id="nombre"
                type="text"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                disableUnderline
                startAdornment={
                  <InputAdornment position="start">
                    <ConstructionIcon />
                  </InputAdornment>
                }
              />
            </Box>
            {/* INPUT APELLIDO */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'start', flexGrow: 1 }}>
                <Typography variant="body1">Apellido</Typography>
              </Box>
              <Input
                sx={{
                  px: 1,
                  background: '#C5C2FA',
                  borderRadius: 4,
                }}
                id="apellido"
                type="text"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                disableUnderline
                startAdornment={
                  <InputAdornment position="start">
                    <ConstructionIcon />
                  </InputAdornment>
                }
              />
            </Box>
            {/* INPUT PASSWORD */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'start', flexGrow: 1 }}>
                <Typography variant="body1">Password</Typography>
              </Box>
              <Input
                sx={{
                  px: 1,
                  background: '#C5C2FA',
                  borderRadius: 4,
                }}
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                disableUnderline
                startAdornment={
                  <InputAdornment position="start">
                    <ConstructionIcon />
                  </InputAdornment>
                }
              />
            </Box>
            {/* INPUT EMAIL */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'start', flexGrow: 1 }}>
                <Typography variant="body1">Email</Typography>
              </Box>
              <Input
                sx={{
                  px: 1,
                  background: '#C5C2FA',
                  borderRadius: 4,
                }}
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                disableUnderline
                startAdornment={
                  <InputAdornment position="start">
                    <ConstructionIcon />
                  </InputAdornment>
                }
              />
            </Box>
            {/* INPUT BIRTHDAY */}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'start', flexGrow: 1 }}>
                <Typography variant="body1">Fecha de Nacimiento</Typography>
              </Box>
              <Input
                sx={{
                  px: 1,
                  background: '#C5C2FA',
                  borderRadius: 4,
                }}
                id="birthday"
                type="text"
                name="birthday"
                placeholder="AAAA-MM-DD"
                value={form.birthday}
                onChange={handleChange}
                disableUnderline
                startAdornment={
                  <InputAdornment position="start">
                    <ConstructionIcon />
                  </InputAdornment>
                }
              />
            </Box>
          </Box>
          {/* Boton de Crear */}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              startIcon={<SaveIcon />}
              onClick={handleUpdateUser}
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </form>
    </React.Fragment>
  );
};

export default UpdateUser;
