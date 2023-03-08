import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import getDepartments from '../services/factoryService';
import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import getDepartments from '../services/factoryService';

const TaiFactoryContext = createContext(null);

const useTaiFactoryContext = () => {
  const context = useContext(TaiFactoryContext);
  if (context === undefined) {
    throw new Error('useTaiFactoryContext was used outside of its Provider');
    throw new Error('useTaiFactoryContext was used outside of its Provider');
  }
  return context;
};

function TaiFactoryContextProvider({ children }) {
function TaiFactoryContextProvider({ children }) {
  const [departments, setDepartments] = useState(null);

  useEffect(() => {
    getDepartments()
      .then(({ Payload }) => setDepartments(Payload));
  }, [setDepartments]);

  return (
    <TaiFactoryContext.Provider value={departments}>
      {children}
    </TaiFactoryContext.Provider>
  );
}
}

export { TaiFactoryContext, TaiFactoryContextProvider, useTaiFactoryContext };
