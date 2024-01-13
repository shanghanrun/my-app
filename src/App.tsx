import React, { useState } from 'react';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

const data:Restaurant  = {
  name: '누나네 식당',
  category: 'western',
  address: {
    city: 'incheon',
    detail:'somewhere',
    zipCode: 234556,
  },
  menu: [
    {name:'rose pasta', price:2000, category:'PASTA'}, 
    {name: 'garlic steak', price:3000, category:'STEAK'}
  ]
}

const App:React.FC = ()=> {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data)

  const changeAddress =(address: Address)=>{
    setMyRestaurant({...myRestaurant, address: address})
  }

  const showBestMenuName =(name:string)=>{
      return name
  }
  
  return (
    <div>
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기 피자" category="피자" 
                upperFunc ={showBestMenuName}
      />
    </div>
  );
}

export default App;
