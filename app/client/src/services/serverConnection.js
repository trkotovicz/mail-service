import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`
});

export const sendMail = async (body, formData) => {
  try {
    const { data } = await api.post('/send-mail', body, {
      headers: { 'Content-Type': `multipart/form-data;boundary=${formData._boundary}` }
    });
    return data;
  } catch (error) {
    return error;
  }
}