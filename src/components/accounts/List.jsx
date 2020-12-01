import React, { useContext } from 'react';
import Item from './Item';
import Context from '../../context/context';
import { addAccount } from '../../actions/accounts';

const List = () => {
  const [state, dispatch] = useContext(Context);

  return (
    <div>
      <ul>
        {state.accounts.map(({ name }) => <Item key={name} name={name} />)}
      </ul >
      <button onClick={
        () => {
          dispatch(addAccount('locomia'))
        }
      }>Add Account</button>
    </div>
  )
}

export default List;