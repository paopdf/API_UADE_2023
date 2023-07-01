import React, { createContext, useState, useEffect } from 'react';
import countUsers from '../api/usuarios.api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userCount, setUserCount] = useState(1);

  useEffect(() => {
    const conteo = async () => {
      try {
        let response = await countUsers();
        setUserCount(response.cantidad);
      } catch (error) {
        console.error(error);
      }
    };

    conteo();
  }, []);

  useEffect(() => {
    console.log(userCount);
    console.log("Aquí debería imprimir el user count");
  }, [userCount]);

  return (
    <UserContext.Provider value={userCount}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
