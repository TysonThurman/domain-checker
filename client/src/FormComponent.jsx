import { useState } from 'react';
import './FormComponent.css';

const API_URL = 'http://localhost:5001';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_URL + `/api/${inputValue}`)
        .then(response => response.json())
        .then(data => setResult(data));
    // Clear the input
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default FormComponent;
