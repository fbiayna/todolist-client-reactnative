export const FINISHED_SPLASH_ANIMATION = 'FINISHED_SPLASH_ANIMATION';
export const FINISHED_VERIFYING_AUTHENTICATION =
  'FINISHED_VERIFYING_AUTHENTICATION';
export const AUTHENTICATION_STATE = 'AUTHENTICATION_STATE';
export const INITIAL_DATA_LOAD_STATE = 'INITIAL_DATA_LOAD_STATE';
export const USER_DATA_LOAD_STATE = 'USER_DATA_LOAD_STATE';
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT';

export const finishedSplashAnimation = () => {
  return {type: FINISHED_SPLASH_ANIMATION};
};

export const finishedVerifyingAuthentication = () => {
  return {type: FINISHED_VERIFYING_AUTHENTICATION};
};

export const signOut = () => {
  return {type: USER_SIGNED_OUT};
};

export const setAuthenticationState = (isAuthenticated: boolean) => {
  return {type: AUTHENTICATION_STATE, payload: isAuthenticated};
};

export const setLoadInitialDataState = (isLoaded: boolean) => {
  return {type: INITIAL_DATA_LOAD_STATE, payload: isLoaded};
};

export const setLoadUserDataState = (isLoaded: boolean) => {
  return {type: USER_DATA_LOAD_STATE, payload: isLoaded};
};
