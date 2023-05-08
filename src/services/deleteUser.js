import axios from 'axios';

import { toast } from 'react-toastify';
import { BASE_URL } from '../helpers/HostPort';

const handleShowServerToast = () => {
  toast.warning('Error en la Peticion');
};

export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/users/${id}`);
    return res.data;
  } catch (error) {
    handleShowServerToast();
  }
};
