import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';

function Cart() {
  const dispatch=useDispatch();
  const products=useSelector((state)=> state.cart);
  let totalAmount=0;
  

  const removeFromCart=(id) =>{
    dispatch(remove(id));
  }

  function getTotal(){
    products.forEach(element =>{
     totalAmount=totalAmount+element.price;
    })
   }

 if(products.length<1){
  return (
    <div className="px-6">
      <h3>Your Cart is Empty...</h3>
      <img className="w-1/2 mt-4" alt="meme" src="https://indianmemetemplates.com/wp-content/uploads/Bhai-kya-kar-raha-hai-tu.jpg"></img>
    </div>
  )
 }

  return (
    <div className="px-6 flex md:flex-row flex-col">
      <div className=" md:w-2/3 w-full">
      <h3>Cart</h3>
        {
          products.map((product)=>(
            <div key={product.id} className="overflow-clip p-2 flex flex-col md:flex-row items-center  justify-between  bg-white shadow-md rounded-xl mb-4">
            <img className="w-20 h-20 object-scale-down" alt='product' src={product.image}></img>
            <h3 className="truncate block ">{product.title}</h3>
            <h3>${product.price}</h3>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={()=> removeFromCart(product.id)}>Remove</button>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col md:ml-4 bg-white shadow-md rounded-xl md:w-1/3 w-full h-max py-6 px-4 ">
        <div className="p-2 border-b-2  border-grey"><h3 className='font-bold'>PRICE DETAILS</h3></div>
        <div>
          <div className="flex flex-row items-center justify-between border border-grey p-2 mt-4"><h3>Price ({products.length} items)</h3> <h3>{getTotal()}${totalAmount}</h3></div>
          <div className="flex flex-row items-center justify-between border border-grey p-2 mt-4"><h3>Delivery Charges</h3> <h3 className='text-[#22CB5C]'>FREE</h3></div>
          <div className="flex flex-row items-center justify-between border border-grey p-2 mt-4"><h3 className="text-lg text-black font-bold">Total Amount</h3> <h3 className="text-lg text-black font-bold">${totalAmount}</h3></div>
          <div className="flex justify-center  mt-4"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Place Order</button></div>
        </div>
      </div>
    </div>
  )
}

export default Cart