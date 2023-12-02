import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  // js
  const cartarray = useSelector ((state)=>state.cartReducer)
  console.log(cartarray);

  return (
    <div style={{marginTop:"100px"}}>
{
cartarray.length? 

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Image</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
  {
    cartarray.map((product,index)=>(
      <tr>
<td>{index+1} </td>
<td >  <img style={{height:"80px",width:"140px"}} src={product.thumbnail} alt="" /> </td>
<td>{product.title}</td>
<td>{product.price}</td>
<td>  <button class="btn btn-light mx-2"><i class="fa-solid text-danger fa-lg fa-trash"></i></button>
</td>
      </tr>
    ))
  } 
  </tbody>
</table>
:<p>nothing to display in cart section</p>
}

    </div>
  )
}

export default Cart