import React, { useEffect ,useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';
import axios from 'axios';

function Home() {
  //
 // const data = useFetch("https://dummyjson.com/products")
  //console.log(data);

 
  const [data,setData]=useState("")

 const apicall =  ()=>{
  axios.get('https://dummyjson.com/products')
  .then(function (response) {
    // handle success
   // console.log(response.data.products);
    setData(response.data.products)
    console.log(data);
  })   
  .catch(function (error) {
    // handle error
    console.log(error);
  })

 } 
 
 useEffect(()=>{
  apicall()
 },[])


  const dispatch = useDispatch()
  return (
   <>
  <div style={{marginTop:'100px'}} classnameName="mt-5 container">
   <div style={{marginTop:"10px"}} className="row  mt-5 mb-5">
     {data?.length>0?
      data?.map((product,index)=>(<div key={index} className="p-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center">
      <div class="card " style={{width:'18rem',height:'26rem'}}>
  <img style={{height:"180px", width:"100%"}} src={product?.thumbnail}  class="card-img-top p-1" alt="product-image"/>
  <div class="card-body ">
    <h5 class="card-title fs-4 fw-bold">{product?.title.slice(0,25)}</h5>
    <p class="card-text">{product.description.slice(0,45)}</p>
<div  className='buttons w-100  d-flex justify-content-end mx-3'>
  <p  className='fs-4 fw-bold mx-5'>${product?.price}</p>
   <button onClick={()=>dispatch(addToWishlist(product))} class="btn btn-light mx-2"><i class="fa-solid text-danger fa-lg fa-heart"></i></button>
     <button onClick={()=>dispatch(addToCart(product))} class="btn btn-light mx-2"><i class="fa-solid fa-lg text-primary fa-cart-shopping"></i></button>

</div>
  </div>
</div>
      </div>)):<p>nothing to display</p>
     }
    </div>
   
   

   </div>
   </>
  )
}

export default Home