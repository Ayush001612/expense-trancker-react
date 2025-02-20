import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import PropTypes from 'prop-types';

function Transaction({transaction}) {
    const { deletetransaction } = useContext(GlobalContext); 
    const sign  = transaction.amount < 0 ? '-': '+';
  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deletetransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    </div>
  )
}

Transaction.propTypes = {
    transaction: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired
    }).isRequired
};

export default Transaction
