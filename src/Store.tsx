import React from 'react'
import { Address, Restaurant } from './model/restaurant'

//props에 들어가는 타입은 주로 interface로 만든다.
interface Props {  
  info: Restaurant,
  changeAddress(address:Address): void
}

const Store:React.FC<Props> = ({info, changeAddress}) => {
  return (
    <div>{info.name}</div>
  )
}

export default Store