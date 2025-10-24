import React, { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  // Remove product from cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) return <h3>Your cart is empty.</h3>;

  return (
    <div>
      <h2 className="mb-4">Your Cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.images[0]} // display first image
                  alt={item.title}
                  style={{ height: "80px", objectFit: "contain" }}
                />
              </td>
              <td>{item.title}</td>
              <td>₹{item.price}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ₹{totalPrice}</h4>
    </div>
  );
}

export default Cart;
