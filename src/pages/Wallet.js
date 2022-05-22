import React from 'react';
import Reader from '../components/Header';
import InsertExpense from '../components/InsertExpense';

class Wallet extends React.Component {
  render() {
    return (
      <div className="Wallet">
        <Reader />
        <main>
          <InsertExpense />
        </main>
      </div>
    );
  }
}

export default Wallet;
