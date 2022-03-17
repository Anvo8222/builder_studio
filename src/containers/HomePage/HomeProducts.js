import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import productLists from '../../translations/productsList.json';
import { addToCart } from '../../components/Cart/cartSlice';
import { cartItemList } from '../../components/Cart/selector';
import ViewDetailPage from '../ViewDetailPage';

function HomeProduct(props) {
  const productListItems = productLists;
  const dispatch = useDispatch();
  const addCart = (id) => {
    const productItem = productListItems.filter((e) => e.id === id);
    const action = addToCart(
      {
        id: productItem[0].id,
        productItem,
      },
    );
    dispatch(action);
  };
  const [showViewDetail, setShowViewDetail] = useState(false);
  const [productViewDetail, setProductViewDetail] = useState(null);

  const handleShowViewDetail = (id) => {
    const productItem = productListItems.filter((e) => e.id === id);
    setShowViewDetail(true);
    setProductViewDetail(productItem);
  };
  const handleCloseViewDetail = () => {
    setShowViewDetail(false);
  };
  return (
    <>
      {productListItems.map((product) => (
        <div key={product.id} className="h-[600px] p-6 border-border border-solid border cursor-pointer hover:shadow-xl transition hover:delay-10 ease-in-out">
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <img className="w-9 h-9 mt-2" src={product.logo} alt={product.name} />
                <div className="ml-2">
                  <span> BUILD AN APP LIKE </span>
                  <h2>
                    {product.name}
                  </h2>
                </div>
              </div>
              <div
                onClick={() => addCart(product.id)}
                role="button"
                tabIndex="0"
                onKeyDown={addToCart}
                className="border-border border-solid border w-8 h-8 rounded-full"
              >
                <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-6 pl-2 pt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="my-8 border-solid border-border border-y-2">
              <img src={product.images[0]} alt={product.name} />
            </div>
            <div>
              <span>
                INCLUDED FEATURES
              </span>
              <div className="block">
                <span>
                  {product.functions.slice(0, 3).join(', ')}
                </span>
              </div>
              <span>
                +
                {' '}
                {product.functions.length - 3}
                {' '}
                other features
              </span>
            </div>
            <div className="flex mt-8 justify-between">
              <div className="">
                <span className="text-textColorBlur">
                  From
                </span>
                <div className="flex">
                  <span className="mr-2 text-center mt-2 font-bold">
                    $
                    {product.costPublic}
                    k
                  </span>
                  <div className="block">
                    <span className="block text-textColorBlur">Per</span>
                    <span className="block text-textColorBlur">platform</span>
                  </div>
                </div>
              </div>
              <div onClick={() => handleShowViewDetail(product.id)} role="button" tabIndex="0">
                <span className="p-2 border-border border-solid border hover:bg-backgroundBtnDetail cursor-pointer">
                  View Details
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      {showViewDetail && <ViewDetailPage productID={productViewDetail} onClose={handleCloseViewDetail} />}
    </>
  );
}
HomeProduct.propTypes = {

};
export default HomeProduct;
