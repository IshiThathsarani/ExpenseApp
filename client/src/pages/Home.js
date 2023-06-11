import React from 'react'
import { useEffect, useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionsList';
import { Container } from '@mui/material';
import '../App.css'

export default function Home() {

    const [transactions, setTransactions] = useState([]); 
    const [editTransactions, setEditTransactions] = useState({}); 

    useEffect(() => {
        fetchTransactions();
      }, []);

      async function fetchTransactions() {
        const res = await fetch("http://localhost:4000/transaction"); //fetches data from the server. default method: get
        const {data} = await res.json(); //{data} is used to destructuring
        setTransactions(data);
      }

      
  return (
    
    <Container>

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
  )
}
