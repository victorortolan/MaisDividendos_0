import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Receita');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ description, amount, category });
    setDescription('');
    setAmount('');
    setCategory('Receita');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Descrição:</label>
        <input
          className={styles.input}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Valor:</label>
        <input
          className={styles.input}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Categoria:</label>
        <select
          className={styles.select}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Receita">Receita</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>
      <button className={styles.button} type="submit">Adicionar Transação</button>
    </form>
  );
};

export default TransactionForm;