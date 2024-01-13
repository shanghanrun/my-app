import React from 'react'
import { Menu } from './model/restaurant'

interface Props extends Omit<Menu, 'price'>{
  upperFunc(name:string): string
}

const BestMenu:React.FC<Props> = ({name,category, upperFunc}) => {
  const bestMenuName = upperFunc(name);
  return (
    <div>
        <div>{bestMenuName}</div>
        <div>{category}</div>
    </div>
  )
}

export default BestMenu