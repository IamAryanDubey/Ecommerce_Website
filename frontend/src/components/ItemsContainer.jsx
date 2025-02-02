import React from 'react';
import ItemCard from './ItemCard';

const ItemsContainer = ({ items }) => {

  return (
    <div className='ItemsContainer'>
      {items.map((item) => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ItemsContainer;

// 