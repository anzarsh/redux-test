import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  console.log('customers', customers);

  const handleAddCustomer = () => {
    const newCustomer = {
      id: Date.now(),
      name: prompt(),
    }
    dispatch({ type: 'ADD_CUSTOMER', payload: newCustomer })
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: 'ADD_CASH', payload: 5 })}
        >
          Добавить наличку
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'GET_CASH', payload: 5 })}
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
            onClick={() => dispatch({ type: 'REMOVE_CUSTOMER', payload: c.id })}
          >
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
