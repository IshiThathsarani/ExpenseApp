// import * as React from 'react';
import {  useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


const InitialForm = {
    amount:'',
    detail:" ",
    date: '' , //new Date()
  };

export default function TransactionForm({fetchTransactions, editTransactions}) {

    const[form, setForm] = useState(InitialForm);

    useEffect(() => {  //move among components via parent component
      if(editTransactions.amount !== undefined) {
        setForm(editTransactions)
      };      
      console.log(editTransactions);
    }, [editTransactions]);

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function handleDate(newValue) {
        setForm({...form, date: newValue});
    }

    async function handleSubmit(e) {
        e.preventDefault(); // prevents page from refreshing
        
        const res = editTransactions.amount === undefined ?  create() :  update(); //ternary operator
      
      }

      function reload(res) {
        if(res.ok) {
          setForm(InitialForm);
          fetchTransactions();
        }  
      }

      async function create() {
        const res = await fetch("http://localhost:4000/transaction", {  //creates a new transaction
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        reload(res);
      }
      async function update() {
        const res = await fetch(`http://localhost:4000/transaction/${editTransactions._id}`, 
        {  
          method: 'PATCH',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        reload(res);
      }


  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
      <Typography variant="h6">
            Add New Transaction
        </Typography>

        <form onSubmit={handleSubmit}>            
            <TextField 
                sx={{marginRight: 5}}
                id="outlined-basic" 
                label="Amount" 
                variant="outlined" 
                size="small"
                name="amount"
                value={form.amount}
                onChange={handleChange}
            />
            <TextField 
                sx={{marginRight: 5}}
                id="outlined-basic" 
                label="Detail" 
                variant="outlined" 
                size="small"
                name="detail"
                value={form.detail}
                onChange={handleChange}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker 
                    label="Transaction Date"
                    inputFormat="MM/DD/YYYY"
                    value={dayjs(form.Date)} //datepicker only accepts dayjs format
                    onChange={handleDate}                    
                    renderInput={(params) => 
                        <TextField 
                            sx={{marginRight: 5}} 
                            size="small"
                            {...params}
                        />}
                />             
            </LocalizationProvider>
            {
              editTransactions.amount !== undefined && (
              <Button 
                type="submit" 
                variant="secondary"
                sx={{marginLeft: 1}}
            >
                Update
            </Button>
            )}
            {
              editTransactions.amount === undefined &&(
                <Button 
                type="submit" 
                variant="contained"
                sx={{marginLeft: 1}}
            >
                Submit
            </Button>
            )}            
        </form>        
      </CardContent>      
    </Card>
  );
}