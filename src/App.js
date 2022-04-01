import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  return (
    <div className="App">
      {cash}
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
    </div>
  );
}

export default App;
