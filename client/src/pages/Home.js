import '../App.css';
import { useEffect, useState } from 'react';
import AppBar from '../components/AppBar';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionsList';
import { Container } from '@mui/material';


function Home() {

  const [transactions, setTransactions] = useState([]); 
  const [editTransactions, setEditTransactions] = useState({}); 

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

      <Container>\

        <TransactionForm 
          fetchTransactions={fetchTransactions} 
          editTransactions={editTransactions}
        />
        <TransactionList 
          transactions={transactions}
          fetchTransactions={fetchTransactions}
          setEditTransactions={setEditTransactions}
        />
        
      </Container>
      

    </div>
  );
}

export default Home;

