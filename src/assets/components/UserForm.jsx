import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
} from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';

export default function UserForm({ handleclose, setdata }) {
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [date, setDate] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [post, setPost] = useState({
    "email": 'user@example.com',
    "password": '1234',
    "first_name": 'andres',
    "last_name": 'bonilla',
    "birthday": '2023-03-23',
  });
  const postData = () => {
    axios.post('users-crud.academlo.tech/users/',{post})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center" mb={4}>
        Agregar Usuario
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Typography variant="h6">Nombre</Typography>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nombres"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
            sx={{ mb: '10px' }}
            {...register('firstName', { required: 'Nombre es requerido' })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />
          <Typography variant="h6">Apellidos</Typography>
          <TextField
            required
            id="lastname"
            name="lastName"
            label="Apellidos"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            sx={{ mb: '10px' }}
            {...register('lastname', { required: 'Apellido es requerido' })}
            error={Boolean(errors.lastNadme)}
            helperText={errors.lastName?.message}
          />
          <Typography variant="h6">Correo</Typography>
          <TextField
            required
            id="email"
            name="email"
            label="Correo"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            sx={{ mb: '10px' }}
            {...register('email', { required: 'Email es requerido' })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
          />
          <Typography variant="h6">Constraseña</Typography>
          <TextField
            required
            id="password"
            name="password"
            label="Contraseña"
            fullWidth
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            autoComplete="given-name"
            variant="standard"
            sx={{ mb: '10px' }}
            {...register('password', { required: 'Contraseña es requerido' })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
          />
          <Typography variant="h6">Fecha de Nacimiento</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} sx={{ mb: '15px' }}>
              <DatePicker
                name="date"
                label="Fecha de nacimiento"
                format="YYYY-MM-DD"
                onChange={(e) => {
                  setDate(e);
                }}
                {...register('date', { required: 'Cumpleaños es requerido' })}
                error={Boolean(errors.date)}
                helperText={errors.date?.message}
              />
            </DemoContainer>
          </LocalizationProvider>
          <FormHelperText style={{ color: '#d32f2f' }}>
            {errors.tnc?.message}
          </FormHelperText>
          <Button variant="contained" color="secondary" type="submit" className="btns" onClick={postData()}>
            Guardar Cambios
          </Button>
        </Container>
      </form>
    </React.Fragment>
  );
}
