import { useState } from "react";
import Display from '../Display';
import Button from '../Button';
import './Calculator.css';


function Calculator() {
    const [displayValue, setDisplayValue] = useState('0');

    const handleNumberClick = (number) => {

        setDisplayValue(displayValue === '0' ? number : displayValue + number);
    };



  
const handleOperatorClick = (operator) => {
const lastChar = displayValue.charAt(displayValue.length - 1);
  
  if (!['+', '-', '*', '/'].includes(lastChar) && displayValue !== '') {
    setDisplayValue(displayValue + operator);
  }
  else if (['+', '-', '*', '/'].includes(lastChar) && displayValue.length > 1) {
    setDisplayValue(displayValue.slice(0, -1) + operator);
  }
};


    const handleEqualsClick = () => {
        try {
            setDisplayValue(eval(displayValue).toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    const handleClearClick = () => {
        setDisplayValue('0');
    };

  return (
     <div className="calculator-container">
      <div className="calculator">
      <Display value={displayValue} />  
    <div className="buttons">
  <Button label="1" onClick={() => handleNumberClick('1')} />
  <Button label="2" onClick={() => handleNumberClick('2')} />
  <Button label="3" onClick={() => handleNumberClick('3')} />
  <Button label="4" onClick={() => handleNumberClick('4')} />
  <Button label="5" onClick={() => handleNumberClick('5')} />
  <Button label="6" onClick={() => handleNumberClick('6')} />
  <Button label="7" onClick={() => handleNumberClick('7')} />
  <Button label="8" onClick={() => handleNumberClick('8')} />
  <Button label="9" onClick={() => handleNumberClick('9')} />
  <Button label="0" onClick={() => handleNumberClick('0')} />

  <Button label="+" onClick={() => handleOperatorClick('+')} />
  <Button label="-" onClick={() => handleOperatorClick('-')} />
  <Button label="*" onClick={() => handleOperatorClick('*')} />
  <Button label="/" onClick={() => handleOperatorClick('/')} />

  <Button label="=" onClick={handleEqualsClick} />

  <Button label="C" onClick={handleClearClick} />
</div>
 </div>
      </div>
      
  );
}

export default Calculator;