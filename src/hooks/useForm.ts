import { useState } from 'react';

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return { form, handleChange, handleSubmit };
};

export default useForm;
