import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {


  return (
    <div className=' itemCard'>
      <Link to={`/item/${item._id}`} state={{item}}>
        <img className='' src="../public/images.jpeg" alt={item.title} />
        <div className='ItemsDetails '>
          <p className='cardPrice'>${item.price}</p>
            {/* Title with overflow handling */}
            <p className=' cardTitle'>
                {item.title}
            </p>
           
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;