import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { DECREMENT, DECREMENT_BY_AMOUNT, INCREMENT, INCREMENT_BY_AMOUNT, selectCount } from './redux/counterFeature/CounterSlice';
import { ADD_INPUT, inputValue } from './redux/counterFeature/IncrementInputSlice';

function App() {

  const count = useSelector(selectCount)
  // const count = useSelector((state) => state.value) we can also do this without importing
  const inValue = useSelector(inputValue)
  const dispatch = useDispatch()
  const inDispatch = useDispatch()

 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>count : {count}</h1>
        <button onClick={() => dispatch(INCREMENT())}>increment</button>
        <button onClick={() => dispatch(DECREMENT())}>decrement</button>
        <input type="text" onChange={(e) => inDispatch(ADD_INPUT(e.target.value))} value={inValue} />
        <button onClick={() => dispatch(INCREMENT_BY_AMOUNT(Number(inValue)))}>increment</button>
        <button onClick={() => dispatch(DECREMENT_BY_AMOUNT(Number(inValue)))}>decrement</button>
      </header>
    </div>
  );
}

export default App;