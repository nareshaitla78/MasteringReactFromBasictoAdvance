import './App.css';
import {useState} from 'react';
function App() {
  const [value,setValue]=useState(0)
  const [convertedValue,setConvertedValue]=useState(0);
  const [country,setCountry]=useState('usa')
  const currency={
    usa:87,
    uk:112,
    aus:54
  }
  let convertValue=()=>{
    setConvertedValue(value*currency[country] )
  }
 
  return (
    <div className="App">
       <h1>convert the indian Rupee to  Dollor</h1>
       <input type="number" placeholder='enter the amount'onChange={(e)=>setValue(e.target.value)}/>
       <button onClick={convertValue}>Convert</button>
       <select onChange={(e)=>setCountry(e.target.value)}>
        <option value='usa' >USA</option>
        <option value='uk'>UK</option>
        <option value='aus'>AUS</option>
       </select>
      <p>{convertedValue} </p>

    </div>
  );
}

export default App;
