import { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
  // State to manage input value and results
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the input and update the result (e.g., echo the input)
    setResult(`You entered: ${inputValue}`);
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
