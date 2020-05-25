import { useSelector, useDispatch } from 'react-redux';

export default function useLogin() {
  // State
  const opened = useSelector(state => state.login.opened);
  const loginForm = useSelector(state => state.login.loginForm);
  const loading = useSelector(state => state.login.loading);

  // Dispatch
  const dispatch = useDispatch();
  const {
    closeModal,
    changeLoginForm,
  } = dispatch.login;

  return {
    opened,
    closeModal,
    changeLoginForm,
    loginForm,
    loading,
  };
}