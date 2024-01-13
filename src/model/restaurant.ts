// const data = {
//   name: '누나네 식당',
//   category: 'western',
//   address: {
//     city: 'incheon',
//     detail:'somewhere',
//     zipCode: 234556,
//   },
//   menu: [
//     {name:'rose pasta', price:2000, category:'PASTA'}, 
//     {name: 'garlic steak', price:3000, category:'STEAK'}
//   ]
// }


//! type은 클래스처럼 대문자로 시작하고,  = 을 사용한다.

export type Restaurant = {
    name:string,
    category:string,
    address:Address
    menu:Menu[]
} 

export type Address ={
    city:string,
    detail:string,
    zipCode:number
}

export type AddressWithoutZipCode = Omit<Address, 'zipCode'>
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

export type Menu ={
    name:string, price:number, category:string
}

export type ApiResponse<T> = {
    data: T[],
    totalPage:number,
    page:number
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
