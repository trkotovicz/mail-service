import 'dotenv/config';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
  timeout: 10000,

});

export const sendMail = async (body) => {
  try {
    const { data } = await api.post('/send-mail', body);
    return data;
  } catch (error) {
    return error;
  }
}