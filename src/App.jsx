import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };
 const handleCalculate = () => {
    try {
      const result = eval(input)
      setInput(result)
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult(0);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} />
      </div>
      <div className="buttons">
        <button className='button' onClick={() => handleClick('7')}>7</button>
        <button className='button' onClick={() => handleClick('8')}>8</button>
        <button className='button' onClick={() => handleClick('9')}>9</button>
        <button className='button' onClick={() => handleClick('/')}>/</button>

        <button className='button' onClick={() => handleClick('4')}>4</button>
        <button className='button' onClick={() => handleClick('5')}>5</button>
        <button className='button' onClick={() => handleClick('6')}>6</button>
        <button className='button' onClick={() => handleClick('*')}>*</button>

        <button className='button' onClick={() => handleClick('1')}>1</button>
        <button className='button' onClick={() => handleClick('2')}>2</button>
        <button className='button' onClick={() => handleClick('3')}>3</button>
        <button className='button' onClick={() => handleClick('-')}>-</button>

        <button className='button' onClick={() => handleClick('0')}>0</button>
        <button className='button' onClick={() => handleClick('.')}>.</button>
        <button className='button' onClick={handleCalculate}>=</button>
        <button className='button' onClick={() => handleClick('+')}>+</button>
      </div>
      <div className="bottom-row">
        <button className='bottom-button' onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;