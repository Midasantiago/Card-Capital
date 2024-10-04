import React from 'react'

const Cart = ({cartItems}) => {
  return (
    <div>
      <button className="cart-button">
        Cart ({cartItems.length})
      </button>
    </div>
  )
}

export default Cart