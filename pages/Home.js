import React from "react";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import { useState } from 'react';
import Image from "next/image";
import styles from '../styles/Home.module.css';

import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const editTransaction = (index, updatedTransaction) => {
    const updatedTransactions = transactions.map((trans, i) =>
      i === index ? updatedTransaction : trans
    );
    setTransactions(updatedTransactions);
  };

  const removeTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Controle de Finanças Pessoais</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        editTransaction={editTransaction}
        removeTransaction={removeTransaction}
      />
    </div>
  );
};

export default Home;