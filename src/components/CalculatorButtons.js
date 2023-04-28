import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function CalculatorButtons() {
  const [calculatorData, setInCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const myInputValue = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setInCalculatorData(newData);
  };

  const inputValue = calculatorData.next || calculatorData.total || '0';
  return (
    <div>
      <div className="display">
        <input type="number" value={inputValue} id="calcu-input" readOnly />
      </div>
      <div className="buttonsContainer">
        <div>
          <input type="button" onClick={() => myInputValue('AC')} value="AC" />
          <input type="button" onClick={() => myInputValue('+/-')} value="+/-" />
          <input type="button" onClick={() => myInputValue('%')} value="%" />
          <input type="button" className="btnOperator" onClick={() => myInputValue('÷')} value="÷" />
        </div>
        <div>
          <input type="button" onClick={() => myInputValue('7')} value="7" />
          <input type="button" onClick={() => myInputValue('8')} value="8" />
          <input type="button" onClick={() => myInputValue('9')} value="9" />
          <input type="button" className="btnOperator" onClick={() => myInputValue('x')} value="x" />
        </div>
        <div>
          <input type="button" onClick={() => myInputValue('4')} value="4" />
          <input type="button" onClick={() => myInputValue('5')} value="5" />
          <input type="button" onClick={() => myInputValue('6')} value="6" />
          <input type="button" className="btnOperator" onClick={() => myInputValue('-')} value="-" />
        </div>
        <div>
          <input type="button" onClick={() => myInputValue('1')} value="1" />
          <input type="button" onClick={() => myInputValue('2')} value="2" />
          <input type="button" onClick={() => myInputValue('3')} value="3" />
          <input type="button" className="btnOperator" onClick={() => myInputValue('+')} value="+" />
        </div>
        <div>
          <input type="button" className="btnOperator-0" onClick={() => myInputValue('0')} value="0" />
          <input type="button" onClick={() => myInputValue('.')} value="." />
          <input type="button" className="btnOperator" onClick={() => myInputValue('=')} value="=" />
        </div>
      </div>
    </div>
  );
}
