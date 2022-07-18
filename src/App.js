
import './App.css';

import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "./state/index"


function App() {
  
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators,dispatch);
 

    
  return (
    <div className="App">
      <h2>Bank Account</h2>
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)} > Deposit </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => withdrawMoney(1000 )}> withdraw </button>
      
    </div> 
  );
}

export default App;
