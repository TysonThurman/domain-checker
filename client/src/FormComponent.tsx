import { useState, ChangeEvent, FormEvent } from 'react';
import './FormComponent.css';
import ReactJson from 'react-json-view';

const API_URL = 'http://localhost:5001';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<any>(0);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');
  const [errorDisplay, setErrorDisplay] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue || inputValue == '') {
      setErrorDisplay(true);
      setErrorText("You must enter a domain!");
      return;
    }
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
    setErrorDisplay(false);
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
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
        <p className={`display-${errorDisplay} error-text`}>{errorText}</p>
        <br className={`display-${!errorDisplay}`} />
        <br className={`display-${!errorDisplay}`} />
      </form>
      <div id="resultdiv">
        {result ? (
          <div>
            <div className="collapse-checkbox">
              <label htmlFor="collapsed">Collapse All</label>
              <input onChange={handleCollapse} id="collapsed" type="checkbox" />
            </div>
            <ReactJson
              src={result}
              displayDataTypes={false}
              theme={"monokai"}
              name={result.domainName}
              collapsed={collapsed}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default FormComponent;
