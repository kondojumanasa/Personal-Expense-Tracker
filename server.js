const express = require('express');
const bodyParser=require("body-parser");
const connectDB=require('./db');
const Transaction = require('./models/Transaction');
require('dotenv').config();

const app=express();
app.use(express.json());




connectDB();

//post method

app.post('/transaction',async (req,res)=>{
    try{
        console.log("Incoming request body:", req.body);  
        const {type,category,amount,date,description}=req.body;
        const transaction=new Transaction({type,category,date,amount,description});
        await transaction.save();
        res.status(200).json();
        
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//get method

app.get('/transaction',async(req,res)=>{
    try{
        const transaction=await Transaction.find();
        res.json(transaction);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//get by id

app.get('/transaction/:id', async(req,res)=>{
    try{
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(400).json('Transaction not found');
        res.json(transaction);
    }catch(err){
         res.status(500).json({message:err.message});
    }
});


//update by id

app.put('/transaction/:id',async (req,res)=>{
    try{
        const {type,category,date,amount,description}=req.body;
        const updatedTransaction=await Transaction.findByIdAndUpdate(req.params.id,
        {type,category,date,amount,description},{new:true});
        if (!updatedTransaction) return res.status(400).json('Transaction not found');
        res.json(updatedTransaction);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});


//delete by id
app.delete('/transaction/:id',async( req,res)=>{
    try{
        const transaction= await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) return res.status(400).json('Transaction not found');
        res.json({message:'Transaction deleted'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//summary

app.get('/summary', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const balance = totalIncome - totalExpense;
    res.json({ totalIncome, totalExpense, balance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




const PORT= process.env.PORT||5000
app.listen(PORT,()=>{
    console.log("server is running");
});

