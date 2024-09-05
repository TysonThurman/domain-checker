import { useState, useEffect } from 'react'
import FormComponent from './FormComponent';
import './App.css'

const API_URL = 'http://localhost:5001';

function App() {
  const [message, setMessage] = useState(0)
  useEffect(() => {
    fetch(API_URL + '/api/hello')
        .then(response => response.json())
        .then(data => setMessage(data.message));
}, []);

return (
  <div>
      {/* <h1>{message}</h1> */}
      <h2>Domain Checker</h2>
      <p>Please enter a domain name below:</p>
      <FormComponent />
  </div>
);
}

export default App;
