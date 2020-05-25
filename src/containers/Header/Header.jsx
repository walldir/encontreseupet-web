import React from 'react';
import Header from '../../components/Header/Header';

import useHeader from "./useHeader";

export default function HeaderContainer() {
  const {
    openLoginModal,
    openRegisterModal,
    logout,
    logged,
    session
  } = useHeader();

  return (
    <Header
      onLogin={openLoginModal}
      onRegister={openRegisterModal}
      onLogout={logout}
      logged={logged}
      session={session}
    />
  );
}