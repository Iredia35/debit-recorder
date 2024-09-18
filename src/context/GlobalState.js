import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
     const [state, dispatch] = useReducer(AppReducer, initialState);

     function deleteRecords(id) {
          dispatch({
               type: 'DELETE_RECORD',
               payload: id
          })
     }

     function addRecords(transaction) {
          dispatch({
               type: 'ADD_RECORD',
               payload: transaction
          })
     }

     return (
          <GlobalContext.Provider value={{
               transactions: state.transactions,
               deleteRecords,
               addRecords
          }}>
               {children}
          </GlobalContext.Provider>
     );
}



