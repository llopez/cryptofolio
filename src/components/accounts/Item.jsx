import React, { useContext } from 'react';
import Context from '../../context/context';
import { deleteAccount } from '../../actions/accounts';

const Item = (props) => {
  const { name, address, dai } = props;

  const [_, dispatch] = useContext(Context);

  return (
    <li>
      {address} : ({name}) : <a onClick={() => {
        dispatch(deleteAccount(address))
      }}>DELETE</a>
      <ul>
        <li>
          DAI: {dai}
        </li>
      </ul>
    </li>
  )
}

export default Item;