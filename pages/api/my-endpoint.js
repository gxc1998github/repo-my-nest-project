// pages/api/my-endpoint.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('YOUR_NEST_BACKEND_URL/api/my-endpoint');
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
}
