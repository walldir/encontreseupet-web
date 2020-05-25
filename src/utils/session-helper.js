
export const getSession = () => JSON.parse((localStorage.getItem('session') || '{}'));

export const getCurrentUser = () => {
  const session = getSession();

  if (!session.sessionUser) {
    throw new Error('Session user not found on local storage.');
  }

  return session.sessionUser;
};

export const setSession = (session) => {
  localStorage.setItem('session', JSON.stringify(session));
  return session;
};
