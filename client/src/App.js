import { useEffect, useState } from 'react';
import AppBar from './components/AppBar';
import TransactionForm from './components/TransactionForm';

const InitialForm = {
  amount:0,
  detail:" ",
  date:" "
}

function App() {
  const[form, setForm] = useState(InitialForm);

  

  const [transactions, setTransactions] = useState([

  ]); 

  async function fetchTransactions() {
    const res = await fetch("http://localhost:4000/transaction"); //fetches data from the server. default method: get
    const {data} = await res.json(); //{data} is used to destructuring
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  function handleInput(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e) {
    e.preventDefault(); // prevents page from refreshing
    const res = await fetch("http://localhost:4000/transaction", {  //creates a new transaction
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(res.ok) {
      setForm(InitialForm);
      fetchTransactions();
    }
    
  }
  return (
    <div >
      <AppBar/>
      <TransactionForm />

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
          name="detail"
          value={form.detail}
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
      <br />
      <section>
        <table>
          <thead>
            <th> Amount </th>
            <th> Detail </th>
            <th> Date </th>
          </thead>
          <tbody>
            {transactions.map((trx) => ( //mapping transactions
              <tr key={trx._id}>
              <td>{trx.amount}</td>
              <td>{trx.detail}</td>
              <td>{trx.Date}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;

