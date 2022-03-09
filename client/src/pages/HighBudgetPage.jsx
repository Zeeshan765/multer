import React, { useState } from 'react';
import './HighBudgetPage.css';
import SingleHighBudget from './SingleHighBudget';
import budgetdata from './budgetdata';

const HighBudgetPage = () => {
  const [menuData, setMenuData] = useState(budgetdata);

  return (
    <>
      <div className='highbudget-container'>
        {menuData
          .filter((data) => data.category === 'High End Budget')
          .map((data, index) => (
            <SingleHighBudget key={index} data={data} />
          ))}
      </div>
    </>
  );
};

export default HighBudgetPage;
