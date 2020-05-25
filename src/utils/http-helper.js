import axios from 'axios';

import config from '../config';
import { getSession, setSession } from './session-helper';

const { baseURL } = config;

let logout = () => {};

export const configureLogout = (LogoutFunc) => {
    logout = LogoutFunc;
}

export function post(headers, params, url, cancelToken) {
    return axios
        .post(baseURL + url, params, {
            headers,
            cancelToken
        })
        .catch((error) => {
            if (error.response && error.response.status === 401) {
                logout();
            }
            return Promise.reject(error);
        })
}

export function get(headers, params, url, cancelToken, options = {}) {
    return axios
      .get(baseURL + url, {
        headers,
        params,
        cancelToken,
        ...options,
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      });
  }

  export function remove(headers, params, url) {
    return axios
      .delete(baseURL + url, {
        params,
        headers,
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      });
  }

  export function put(headers, params, url) {
    return axios
      .put(baseURL + url, params, {
        headers,
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      });
  }

  export function headersWithToken() {
    const session = JSON.parse(localStorage.getItem('session') || '{}');
  
    return {
      Authorization: `Bearer ${session.token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
  }

  export const httpHelper = {
      get,
      post,
      remove,
      put,
  }