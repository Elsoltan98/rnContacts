import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import envs from './../config/env';
import {navigate} from '../navigations/SideMenu/RootNavigator';
import {CREATE_CONTACT} from '../constants/routeNames';

let headers = {};

const instance = axios.create({
  baseURL: envs.DEV_BACKEND_URL,
  headers,
});

instance.interceptors.request.use(
  async config => {
    // navigate(CREATE_CONTACT);

    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
