import { useSelector, useDispatch } from 'react-redux';

export default function useRegister() {
  // State
  const opened = useSelector(state => state.register.opened);
  const registerForm = useSelector(state => state.register.registerForm);
  const loading = useSelector(state => state.register.loading);

  // Dispatch
  const dispatch = useDispatch();
  const {
    closeModal,
    changeRegisterForm,
  } = dispatch.register;

  return {
    opened,
    closeModal,
    registerForm,
    changeRegisterForm,
    loading,
  };
}