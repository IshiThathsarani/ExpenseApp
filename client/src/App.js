import './App.css';
import { useEffect, useState } from 'react';
import AppBar from './components/AppBar';
import TransactionForm from './components/TransactionForm';


function App() {

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

  return (
    <div >
      <AppBar/>
      <TransactionForm fetchTransactions={fetchTransactions}/>

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

