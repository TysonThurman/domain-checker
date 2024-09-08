import { useState, useEffect } from 'react'
import FormComponent from './FormComponent';
import './App.css'

// const API_URL = 'http://localhost:5001';

function App() {
  // const [message, setMessage] = useState({});
//   useEffect(() => {
    // fetch(API_URL + '/api/hello')
    //     .then(response => response.json())
    //     .then(data => setMessage(data.message));
// }, []);

return (
  <div>
      <h2>Domain Checker</h2>
      <p>Please enter a domain name below:</p>
      {/* <FormComponent message={message} /> */}
      <FormComponent />
  </div>
);
}

export default App;
