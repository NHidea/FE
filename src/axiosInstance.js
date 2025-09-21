// src/AxiosInstance.js

import axios from 'axios';

// 환경 변수에서 baseURL 가져오기
const baseURL = process.env.REACT_APP_API_URL;

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;