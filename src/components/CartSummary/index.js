// Write your code here
import Popup from 'reactjs-popup'

import CartContext from '../../context/CartContext'

import Payment from '../Payment'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      const cartLength = cartList.length
      return (
        <div>
          <h1>Order Total:Rs {total}/-</h1>
          <p>{cartLength} items in cart</p>
          <Popup
            modal
            trigger={
              <button type="button" className="checkout-button">
                Checkout
              </button>
            }
            position="top left"
          >
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
