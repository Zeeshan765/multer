import React, { useState } from 'react';
import './HighBudgetPage.css';
import SingleHighBudget from './SingleHighBudget';
import axios from 'axios';
import budgetdata from './budgetdata';

const HighBudgetPage = () => {
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
  // console.log('Inside Products Component');
  return (
    <>
      <h1>High budgetPage</h1>
      <div className='highbudget-container'>
        {/* {menuData */}
        {/* .filter((data) => data.category === 'High Budget') */}
        {/* .map((data, index) => ( */}
        {/* <SingleHighBudget key={index} data={data} /> */}
        {/* ))} */}
        {products
          .filter((product) => product.category === 'high')
          .map((product, index) => (
            <SingleHighBudget key={index} product={product} />
          ))}
      </div>
    </>
  );
};

export default HighBudgetPage;
