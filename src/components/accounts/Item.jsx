import React from 'react';

const Item = (props) => {
  const { name } = props;

  return (
    <li>{name}</li>
  )
}

export default Item;