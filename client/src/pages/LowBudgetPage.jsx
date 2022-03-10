import React, { useState } from 'react';
import './LowBudgetPage.css';
import SingleLowBudget from './SingleLowBudget';
import axios from 'axios';
import budgetdata from './budgetdata';

const LowBudgetPage = () => {
  //const [menuData, setMenuData] = useState(budgetdata);
  const [products, setProducts] = React.useState([]);

  /*const getData = () => {
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
  React.useEffect(getData, []);*/
  React.useEffect(() => {
    axios
      .get('http://localhost:4000/api/products')
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
        {products.map((product, index) => (
          <SingleLowBudget key={index} product={product} />
        ))}
      </div>
    </>
  );
};

export default LowBudgetPage;
