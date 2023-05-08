import axios from 'axios';

import { toast } from 'react-toastify';
import { BASE_URL } from '../helpers/HostPort';

const handleShowServerToast = () => {
  toast.warning('Error en la Peticion');
};

export const getAllUsers = async (data) => {
  try {
    const res = await axios.get(`${BASE_URL}/users`);

    return res.data;
  } catch (error) {
    handleShowServerToast();
  }
};
