import React from 'react';
import Item from './Item';

const List = (props) => {
  const { accounts } = props;

  return (
    <ul>
      {accounts.map(({ name }) => <Item key={name} name={name} />)}
    </ul >
  )
}

export default List;