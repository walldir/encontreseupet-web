import { useDispatch, useSelector } from 'react-redux';


export default function useHeader() {
  //State
  const logged = useSelector(state => state.login.logged);
  const session = useSelector(state => state.login.session);

  // Dispatch
  const dispatch = useDispatch();

  const openLoginModal = dispatch.login.openModal;
  const openRegisterModal = dispatch.register.openModal;
  const logout = dispatch.login.logout;

  return {
    openLoginModal,
    openRegisterModal,
    logout,
    logged,
    session,
  }
}