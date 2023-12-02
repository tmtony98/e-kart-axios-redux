import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/wishlistSlice';



function Wishlist() {
  //js
  const dispatch = useDispatch()
    const Wishlistarray = useSelector((state) => state.wishlistReducer);
    const addToCartFromWishlist = (product)=>{
      dispatch(removeFromWishlist(product.id))
    }
  return (
<>
<h1>wishlist page</h1>
<div style={{marginTop:'100px'}}>
<div className='container'>
  <div className='row'>
    {
     Wishlistarray?.length>0?  Wishlistarray.map(product=>(
        <div className='col-lg-4 col-md-6'>
             <div class="card" style={{width:'18rem'}}>
  <img src={product?.thumbnail}  class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product?.title}</h5>
    <p class="card-text">Some quick example text to build on t</p>
<div className='buttons d-flex justify-content-end mx-3'>
  <p className='fs-3 fw-bold mx-5 p-0'>${product?.price}</p>
  <button onClick={()=>dispatch(removeFromWishlist(product.id))} class="btn btn-light mx-2"><i class="fa-solid text-danger fa-lg fa-trash"></i></button>
     <button onClick={()=>dispatch(addToCartFromWishlist(product.id))}  class="btn btn-light mx-2"><i class="fa-solid fa-lg text-primary fa-cart-shopping"></i></button>

</div>
  </div>
</div>
        </div>
      ))
     :<p>Nothing to display inside wishlist </p>
    }

  </div>
</div>


</div>
</>  )
}

export default Wishlist