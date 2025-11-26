import { useState } from 'react';
import './index.css';

const Calculator = () => {
  const [input, setInput] = useState('0');

  const handleButtonClick = (value) => {
  setInput((prev) => {
    if (value === ".") {
      const lastNumber = prev.split(/[\+\-\*\/]/).pop();
      if (lastNumber.includes(".")) return prev;
    } else if (["+", "-", "*", "/"].includes(value)) {
      const lastChar = prev.slice(-1);
      if (["+", "-", "*", "/"].includes(lastChar) && lastChar === "-") {
        return prev.slice(0, -1) + value;
      }
    }
    return prev === "0" ? value : prev + value;
  });
};

  const handleClear = () => {
    setInput('0');
  };

  const handleCalculate = () => {
    try {
      setInput(String(eval(input)));
    } catch (error) {
      setInput('Error');
    }
  };
  const handleKeyPress = (event) => {
    const { key } = event;
    if (/\d/.test(key)) {
      handleButtonClick(key);
    } else if (key === '.') {
      handleButtonClick('.');
    } else if (["+", "-", "*", "/"].includes(key)) {
      handleButtonClick(key);
    } else if (key === 'Enter') {
      handleCalculate();
    } else if (key === 'Backspace') {
      handleClear();
    }
  };

  return (
    <div>
      <div className="calculator">
      <div className="display">
       <input type="text" value={input}  id="display" onKeyDown={handleKeyPress} autoFocus/>
      </div>
       <div className="button-grid">
         <button id="clear" className="btn-clear" onClick={handleClear}>AC</button>
         <button id="divide" className="btn-operator" onClick={() => handleButtonClick('/')}>/</button>
         <button id="multiply" className="btn-operator" onClick={() => handleButtonClick('*')}>×</button>

        <button id="seven" onClick={() => handleButtonClick('7')}>7</button>
        <button id="eight" onClick={() => handleButtonClick('8')}>8</button>
        <button id="nine" onClick={() => handleButtonClick('9')}>9</button>
        <button id="subtract" className="btn-operator" onClick={() => handleButtonClick('-')}>−</button>

        <button id="four" onClick={() => handleButtonClick('4')}>4</button>
        <button id="five" onClick={() => handleButtonClick('5')}>5</button>
        <button id="six" onClick={() => handleButtonClick('6')}>6</button>
        <button id="add" className="btn-operator" onClick={() => handleButtonClick('+')}>+</button>

        <button id="one" onClick={() => handleButtonClick('1')}>1</button>
        <button id="two" onClick={() => handleButtonClick('2')}>2</button>
        <button id="three" onClick={() => handleButtonClick('3')}>3</button>

        <button id="zero" onClick={() => handleButtonClick('0')}>0</button>
        <button id="decimal" onClick={() => handleButtonClick('.')}>.</button>
        <button id="equals" className="btn-operator" onClick={handleCalculate}>=</button>
       </div>
      </div>
      <div className="author">
        <p><span>Designed and Coded By:</span><br/><span><strong>Washiy</strong></span></p>
      </div>
    </div>
  );
};
export default Calculator;
