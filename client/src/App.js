import './App.css';
import { useEffect, useState } from 'react';
import AppBar from './components/AppBar';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionsList';
import { Container } from '@mui/material';


function App() {

  const [transactions, setTransactions] = useState([]); 

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

      <Container>
        <TransactionForm fetchTransactions={fetchTransactions}/>
        <TransactionList transactions={transactions}/>
      </Container>
      

    </div>
  );
}

export default App;

