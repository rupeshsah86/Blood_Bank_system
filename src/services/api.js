import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (userData) => api.post('/auth/login', userData),
};

// Donors API
export const donorsAPI = {
  getDonors: () => api.get('/donors'),
  addDonor: (donorData) => api.post('/donors', donorData),
};

// Blood Bank API
export const bloodBankAPI = {
  getBloodStock: () => api.get('/bloodbank'),
  addBloodStock: (stockData) => api.post('/bloodbank', stockData),
};

// Blood Requests API
export const requestsAPI = {
  createRequest: (requestData) => api.post('/requests', requestData),
  getRequests: () => api.get('/requests'),
  updateStatus: (id, status) => api.put(`/requests/${id}`, { status }),
};

export default api;