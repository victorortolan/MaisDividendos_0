import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const TransactionList = ({ transactions, editTransaction, removeTransaction }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editDescription, setEditDescription] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editCategory, setEditCategory] = useState('Receita');

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditDescription(transactions[index].description);
    setEditAmount(transactions[index].amount);
    setEditCategory(transactions[index].category);
  };

  const handleSave = (index) => {
    editTransaction(index, { description: editDescription, amount: editAmount, category: editCategory });
    setEditIndex(null);
  };

  return (
    <div>
      <h2 className={styles.title}>Lista de Transações</h2>
      <ul className={styles.list}>
        {transactions.map((transaction, index) => (
          <li className={styles.listItem} key={index}>
            {editIndex === index ? (
              <div>
                <input
                  className={styles.input}
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <input
                  className={styles.input}
                  type="number"
                  value={editAmount}
                  onChange={(e) => setEditAmount(e.target.value)}
                />
                <select
                  className={styles.select}
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                >
                  <option value="Receita">Receita</option>
                  <option value="Despesa">Despesa</option>
                </select>
                <button className={styles.buttonSecondary} onClick={() => handleSave(index)}>Salvar</button>
                <button className={styles.buttonSecondary} onClick={() => setEditIndex(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                <span>{transaction.description} - {transaction.amount} - {transaction.category}</span>
                <div className={styles.listItemContent}>
                  <button className={styles.buttonEdit} onClick={() => handleEdit(index)}>Editar</button>
                  <button className={styles.buttonRemove} onClick={() => removeTransaction(index)}>Remover</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;