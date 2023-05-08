import React from 'react';

import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import { Paper } from '@mui/material';

import { deleteUser } from '../../services/deleteUser';
import UpdateUser from './UpdateForm';

export const UserCard = ({ index, data }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    deleteUser(index)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 8,
        borderRadius: 4,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2" sx={{ textAlign: 'center' }}>
          {`${data.first_name} ${data.last_name}`}
        </Typography>
        <Typography>Email: {data.email}</Typography>
        <Typography>Password: {data.password}</Typography>
        <Typography>BrithDay: {data.birthday}</Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small" color="primary" onClick={handleOpen}>
          <EditIcon />
        </IconButton>
        <IconButton size="small" color="error" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <UpdateUser cerrar={handleClose} index={index} />
          </Paper>
        </Container>
      </Modal>
    </Card>
  );
};
