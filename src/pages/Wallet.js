import React from 'react';
import Reader from '../components/Header';
import InsertExpense from '../components/InsertExpense';
import ShowExpense from '../components/ShowExpense';

class Wallet extends React.Component {
  render() {
    return (
      <div className="Wallet">
        <Reader />
        <main>
          <InsertExpense />
          <ShowExpense />
        </main>
      </div>
    );
  }
}

export default Wallet;
