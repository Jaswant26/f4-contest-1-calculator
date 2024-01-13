import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e, setter) => {
    const inputValue = e.target.value;
    setter(inputValue);
  };

  const validateInput = () => {
    if (!num1.trim() || !num2.trim()) {
      setError('Please enter both numbers.');
      return false;
    }

    if (!/^-?\d*\.?\d*$/.test(num1) || !/^-?\d*\.?\d*$/.test(num2)) {
      setError('Please enter valid numbers.');
      return false;
    }else{
        setError('Success!')
        return true;
    }

    setError('');
    return true;
  };

  const handleOperation = (operator) => {
    if (validateInput()) {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      switch (operator) {
        case '+':
          setResult(n1 + n2);
          break;
        case '-':
          setResult(n1 - n2);
          break;
        case '*':
          setResult(n1 * n2);
          break;
        case '/':
          setResult(n1 / n2);
          break;
        default:
          setError('Invalid operation.');
      }
    }
  };

  return (
    <div className='calculator-div'>
      <h1>React Calculator</h1>
      <div className='input-div'>
        <input
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => handleInputChange(e, setNum1)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => handleInputChange(e, setNum2)}
        />
      </div>
      <div className='buttons-div'>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>*</button>
        <button onClick={() => handleOperation('/')}>/</button>
      </div>
      {error && <div className='error-div' style={{ color: 'red' }}>{error}</div>}
      {result !== null && (
        <div className='result' style={{ color: 'blue' }}>
          Result - {result.toFixed(2)}
        </div>
      )}
    </div>
  );
};

Calculator.propTypes = {
  num1: PropTypes.string,
  num2: PropTypes.string,
  result: PropTypes.number,
  error: PropTypes.string,
};

export default Calculator;
