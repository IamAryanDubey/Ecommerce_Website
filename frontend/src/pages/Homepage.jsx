import React from 'react'
import Header from '../components/Header'
import ItemsContainer from '../components/ItemsContainer'
import { useState, useEffect } from 'react'
// import db from '../components/db.json';

const Homepage = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8000/additem'; // Corrected URL

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setItems(data); // Store data in state
        } else {
          console.error('Error:', await response.json());
        }
      } catch (err) {
        console.error('Fetch error:', err);
        alert('Something went wrong!');
      }
    };

    fetchData();
  }, []); // Runs only once on mount
  return (
    <div>
      <Header/>
      <div className=''>
        <ItemsContainer items={items}/> 
      </div>
    </div>
  )
}

export default Homepage
