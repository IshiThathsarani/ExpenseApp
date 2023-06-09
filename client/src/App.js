import { useState } from 'react';

function App() {
  const[form, setForm] = useState({
    amount:0,
    details:" ",
    date:" "
  });

  function handleInput(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault(); // prevents page from refreshing
    const res= await fetch('http://localhost:4000/transactions', {
      method: 'POST',
      body: form,
    });
    console.log(res)
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          name="amount"
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter transaction amount" 
        />
        <input 
          type="text" 
          name="details"
          value={form.details}
          onChange={handleInput}
          placeholder="Enter transaction details" 
        />
        <input 
          type="date" 
          name="date"
          value={form.date}
          onChange={handleInput}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default App;
