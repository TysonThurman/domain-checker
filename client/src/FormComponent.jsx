import { useState } from 'react'; 
import './FormComponent.css';
import ReactJson from 'react-json-view'

const API_URL = 'http://localhost:5001';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);

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
      setResult(data.WhoisRecord);
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
      <div id="resultdiv">
      {result ? <ReactJson src={result} displayDataTypes={false} theme={"monokai"} name={result.domainName} collapsed={true} /> : ''}
      </div>

    </div>
  );
};

export default FormComponent;
