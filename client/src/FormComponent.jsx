import { useState } from 'react';
import './FormComponent.css';

const API_URL = 'http://localhost:5001';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(API_URL + `/api/${inputValue}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      // setResult(`Domain Name: ${data.WhoisRecord.domainName}`);
      setResult(JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
    
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
