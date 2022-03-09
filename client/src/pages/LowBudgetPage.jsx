import React, { useState } from 'react';
import './LowBudgetPage.css';
import SingleLowBudget from './SingleLowBudget';
import axios from 'axios';
import budgetdata from './budgetdata';

const LowBudgetPage = () => {
  //const [menuData, setMenuData] = useState(budgetdata);
  const [menuData, setMenuData] = React.useState([]);

  const getData = () => {
    axios
      .get('http://localhost:4000/api/products')
      .then((res) => {
        setMenuData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, []);
  console.log('Inside Products Component');
  return (
    <>
      <h1>Low budgetPage</h1>
      <div className='Lowbudget-container'>
        {/* {menuData */}
        {/* .filter((data) => data.category === 'Low Budget') */}
        {/* .map((data, index) => ( */}
        {/* <SingleLowBudget key={index} data={data} /> */}
        {/* ))} */}
        {menuData.map((data, index) => (
          <SingleLowBudget key={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default LowBudgetPage;
