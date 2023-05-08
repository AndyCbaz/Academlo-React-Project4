import axios from 'axios';

import { toast } from 'react-toastify';
import { BASE_URL } from '../helpers/HostPort';

const handleShowServerToast = () => {
  toast.warning('Error en la Peticion');
};
const handleShowExitPetition = () => {
  toast.done('Usuario Creado');
};

export const createUser = async (first_name, last_name, email, password, birthday) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      birthday: birthday,
    });
    handleShowExitPetition();
    return res.data;
  } catch (error) {
    handleShowServerToast();
  }
};
