import { createContext, useReducer } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import AppReducer from "./appReducer"; // Ensure AppReducer is imported

const initialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deletetransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    }
    )
  }

  function addtransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    }
    )
  }

  return (
    <GlobalContext.Provider value={{ 
      transactions: state.transactions, 
      deletetransaction,
      addtransaction,
      dispatch 
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures 'children' is a React node
};

export default GlobalProvider;
