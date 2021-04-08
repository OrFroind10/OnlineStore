import { useState } from "react";
import "../styles/ShoppingCart.css";

const ShoppingCart = () => {
  const [lsData, setLsdata] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  console.log(lsData);

  const handleRemove = (item) => {
    let newLsData = lsData.filter(product => product !== item)
    localStorage.setItem('cart', JSON.stringify(newLsData))
    setLsdata(newLsData)
  }
  const getSubTotal = () => {
    let sum = 0;
    for (const prud of lsData) {
        sum += prud.price * prud.count
    }

    return sum
  }

  const handleCountChange = (e, item) => {
    console.log(e)
  const newLsData = lsData.map(product => {
    if (product === item) product.count = e.target.value;
    return product
  })
  localStorage.setItem('cart', JSON.stringify(newLsData))
  setLsdata(newLsData)
  
  }
  
  return (
    <div>
      <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>
        {lsData.length === 0 && <div className="product"><center><b>You have no items in your shopping cart. </b></center></div> }
        {lsData.map((item) => (
          <div key={item.id} className="product">
            <div className="product-image">
              <img src={item.image} alt="" />
            </div>
            <div className="product-details">
              <div className="product-title"><b>{item.title}</b></div>
              <p className="product-description">from Avi Express</p> 
            </div>
            <div className="product-price">{item.price}</div>
            <div className="product-quantity">
              <input onChange={(e) => handleCountChange(e, item)} type="number" value={item.count} max="10" min="1" />
            </div>
            <div className="product-removal">
              <button onClick={() => handleRemove(item)} className="remove-product">
                Remove
              </button>
            </div>
            <div className="product-line-price">{(item.price * item.count).toFixed(2)}</div>
          </div>
        ))}
        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">
              {getSubTotal().toFixed(2)}
            </div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">
              {lsData.length === 0 ? 0 : "10.00"}
            </div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">
              {lsData.length === 0 ? 0 : (getSubTotal()+ 10).toFixed(2)}
            </div>
          </div>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
