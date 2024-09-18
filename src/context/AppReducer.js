// const AppReducer = (state, action) => {
//      switch (action.type) {
//           default:
//                return state;
//      }
// } 

import { Transaction } from "../components/Transaction";

// export default AppReducer();

export default (state, action) => {
     switch (action.type) {
       case "DELETE_RECORD":
          return {
               ...state,
               transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
          }
          case 'ADD_RECORD':
          return {
               ...state,
               transactions: [action.payload, ...state.transactions]
          }
       default:
         return state;
     }
}