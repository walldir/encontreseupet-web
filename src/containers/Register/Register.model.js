import { message } from 'antd';
import Immutable from 'seamless-immutable';

import { createUser } from '../../services/users.service';

const defaultRegisterForm = {
  nome: '',
  email: '',
  telefone: '',
  password: '',
};

export default {
  /**
   * State
   */
  state: Immutable({
    loading: false,
    opened: false,
    registerForm: defaultRegisterForm,
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
        registerForm: defaultRegisterForm,
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
    changeRegisterForm: (state, payload) => {
      return {
        ...state,
        registerForm: payload,
      }
    },
  },
  /**
   * Effects 
   */
  effects: dispatch => ({
    register: (payload, rootState) => {
      dispatch.register.showLoading();

      createUser(payload)
        .then((response) => {
          message.success("Cadastrado com sucesso, faça o login para acessar as funcionalidades.");

          dispatch.register.closeModal();
        }).catch((error) => {
          message.error(error.response.data.message);
        }).finally(() => {
          dispatch.register.hideLoading();
        });
    }
  })
};