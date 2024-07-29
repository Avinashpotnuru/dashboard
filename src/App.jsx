import './App.css'
import { useSelector, useDispatch } from "react-redux";

import { toggleNav } from './redux/slices/TabsSlice';



function App() {

  const dispatch=useDispatch()

  const toggle = useSelector((state) => state.tabSlice.tabs ); 
  
 console.log(toggle ,"ehgu")

  return (
    <>
      <h1>Avinash</h1>
      <h1>{toggle ? "true" : "false"}</h1>

      <button onClick={() => dispatch(toggleNav())}>
        {toggle ? "true" : "false"}
      </button>
    </>
  );
}

export default App
