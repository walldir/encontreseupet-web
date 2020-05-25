import { message } from 'antd';
import Immutable from 'seamless-immutable';

import { history } from '../../utils/history';
import { setSession, getSession } from '../../utils/session-helper';
import { login } from '../../services/users.service';

const defaultLoginForm = {
  email: '',
  password: '',
};

export default {
  /**
   * State
   */
  state: Immutable({
    loading: false,
    opened: false,
    session: getSession() ? getSession() : {},
    loginForm: defaultLoginForm,
    logged: localStorage.getItem('session') === "{}" || localStorage.getItem('session') === null ? false : true,
  }),
  /**
   * Reducers
   */
  reducers: {
    openModal: (state, payload) => {
      return {
        ...state,
        opened: true,
      }
    },
    closeModal: (state, payload) => {
      return {
        ...state,
        opened: false,
        loginForm: defaultLoginForm,
      }
    },
    showLoading: (state, payload) => {
      return {
        ...state,
        loading: true,
      }
    },
    hideLoading: (state, payload) => {
      return {
        ...state,
        loading: false,
      }
    },
    loginSucess: (state, payload) => {
      return {
        ...state,
        session: payload,
        logged: true,
      }
    },
    changeLoginForm: (state, payload) => {
      return {
        ...state,
        loginForm: payload,
      }
    },
    logout: (state, payload) => {
      setSession({});
      history.push('/');

      return {
        ...state,
        logged: false,
        session: []
      }
    }
  },
  /**
   * Effects 
   */
  effects: dispatch => ({
    login: (payload, rootState) => {
      dispatch.login.showLoading();

      login(payload.email, payload.password)
        .then((session) => {
          setSession(session);

          dispatch.login.loginSucess(session);
          dispatch.login.closeModal();
        })
        .catch((error) => {
          console.log(error);
          message.error(error.response.data.message);
        }).finally(() => {
          dispatch.login.hideLoading();
        });
    }
  })
};
