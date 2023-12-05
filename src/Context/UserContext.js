import React, { createContext, useContext, useReducer } from 'react';

// Definindo o estado inicial do usuário (não logado)
const initialState = {
  user: null,
};

// Criando o contexto do usuário
const UserContext = createContext();

// Definindo as ações disponíveis para modificar o estado do usuário
const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

// Reducer para manipular as ações e modificar o estado do usuário
const userReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// Componente Provider que envolve a aplicação
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Função para realizar o login
  const login = (user) => {
    dispatch({
      type: actionTypes.LOGIN,
      payload: user,
    });
  };

  // Função para realizar o logout
  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT,
    });
  };

  // Disponibilizando o estado e as funções de login/logout para os componentes descendentes
  const value = {
    user: state.user,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Hook customizado para utilizar o contexto do usuário
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext deve ser utilizado dentro de um UserProvider');
  }
  return context;
};
