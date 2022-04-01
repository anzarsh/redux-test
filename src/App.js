import { useDispatch, useSelector } from "react-redux";
import { addCashAction, removeCashAction } from "./store/cash-reducer";
import { addCustomerAction, removeCustomerAction } from "./store/customer-reducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const handleAddCustomer = () => {
    const newCustomer = {
      id: Date.now(),
      name: prompt(),
    };
    dispatch(addCustomerAction(newCustomer));
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div>
        <button
          type="button"
          onClick={() => dispatch(addCashAction(5))}
        >
          Добавить наличку
        </button>
        <button
          type="button"
          onClick={() => dispatch(removeCashAction(5))}
        >
          Снять наличку
        </button>
        
        <button
          type="button"
          onClick={handleAddCustomer}
        >
          Добавить пользователя
        </button>
      </div>
      <div>
        {customers.map(c => (
          <div
            key={c.id}
            onClick={() => dispatch(removeCustomerAction(c.id))}
          >
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
