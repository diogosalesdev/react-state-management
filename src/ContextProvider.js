import React, {useState, createContext, useContext} from 'react';

const ToggleConext = createContext();

export const ToggleProvider = props => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(prevState => !prevState);
  return (
    <ToggleConext.Provider value={{toggle, handleToggle}}>
      {props.children}
    </ToggleConext.Provider>
  );
}; 

export const useToggle = () => {
  const context = useContext(ToggleConext);
  if (!context) return null;
  return context;
}

