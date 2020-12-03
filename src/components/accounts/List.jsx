import React, { useContext } from 'react';
import Item from './Item';
import Context from '../../context/context';
import { addAccount, updateAccount } from '../../actions/accounts';

const List = () => {
  const [state, dispatch] = useContext(Context);

  const getBalances = () => {
    setTimeout(() => {

      state.accounts.map((account) => {
        dispatch(updateAccount({ ...account, dai: 1000 }))
      })

    }, 3000)
  }

  return (
    <div>
      <ul>
        {state.accounts.map((account) => <Item key={account.name} {...account} />)}
      </ul >
      <button onClick={
        () => {
          dispatch(addAccount('Ledger #4', '0x95377ac2a0792d5a81c0f8bbdef57f1ac62331cc'))
        }
      }>Add Account</button>
      <button onClick={
        () => {
          getBalances();
        }
      }>Get Balances</button>
    </div>
  )
}

export default List;