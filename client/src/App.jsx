import FormComponent from './FormComponent';
import './App.css'

function App() {
return (
  <div>
      <h2>Domain Checker</h2>
      <p>Please enter a domain name below <span className='eg-text'>(eg. google.com)</span>:</p>
      <FormComponent />
  </div>
);
}

export default App;
