import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemList } from './selector';

function Cart(props) {
  const cartList = useSelector(cartItemList);
  return (
    <div className={`fixed flex ${cartList.length > 0 ? 'block' : 'hidden'} justify-between h-[100px] bottom-0 right-0 w-[76%] bg-backgroundColor`}>
      <ul className="flex items-center">
        {cartList.map((item, index) => (
          <li key={item.id} className="p-2">
            <img className="w-10 h-10" src={item.productItem[0].logo} alt="logo" />
          </li>
        ))}
        <span className="underline">Clear selection</span>
      </ul>
      <div>
        <span>2 templates selected</span>
        <button type="button" className="h-full bg-backgroundBuild w-[200px] ml-4">
          Build Now
        </button>
      </div>
    </div>
  );
}

Cart.propTypes = {

};
export default Cart;
