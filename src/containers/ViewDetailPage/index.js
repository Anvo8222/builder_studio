import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './Arrow';
import '../../style/ViewDetailPage.css';

function ViewDetailPage(props) {
  const { productID, onClose } = props;
  const viewProduct = productID[0];

  const [img, setImg] = useState(0);
  const handleImage = (index) => {
    console.log('viewProduct.images', viewProduct.images[index]);
    setImg(index);
  };
  const handlePrevImg = () => {
    if (img > 0) {
      setImg(img - 1);
    } else {
      setImg(viewProduct.images.length);
    }
  };
  const handleNextImg = () => {
    if (img < viewProduct.images.length) {
      setImg(img + 1);
    } else {
      setImg(0);
    }
    console.log('viewProduct.images.length', viewProduct.images.length);
    console.log('img', img);
  };
  return (
    <div className="fixed justify-center items-center flex inset-0 bg-backgroundFixed z-20">
      <div className="block bg-backgroundColor">
        <div className="max-w-[1024px] relative max-h-[600px] overflow-y-auto">
          <header className="h-[30px] p-[14px] flex w-full justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <div onClick={onClose} role="button" tabIndex="0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </header>
          <div className="w-full flex h-full mt-4">
            <div className="w-[300px] basis-1/2">
              <div className="flex justify-center relative">
                <svg onClick={handlePrevImg} role="button" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-[25%] top-[50%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <img className="h-[370px] max-w-[300px]" src={viewProduct.images[img]} alt={viewProduct.name} />
                <svg onClick={handleNextImg} role="button" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-[25%] top-[50%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <Slider
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
                slidesToShow={4}
                slidesToScroll={4}
              >
                {viewProduct.images.map((item, index) => (
                  <div key={index} onClick={() => handleImage(index)} role="button" tabIndex="0" className="border-boder border-solid border p-2">
                    <img className="w-10 h-16" src={viewProduct.images[index]} alt="abc" />
                  </div>
                ))}

              </Slider>
            </div>
            <div className="basis-1/2">
              <div className="border-b border-border border-solid pb-4">
                <div className="flex justify-items-center text-center">
                  <img className="w-10 h-10" src={viewProduct.logo} alt="logo" />
                  <h2 className="text-4xl pl-4">{viewProduct.name}</h2>
                </div>
                <span className="font-light my-2 block">
                  {viewProduct.functions.length}
                  {' '}
                  features included
                </span>
                <p>{viewProduct.description}</p>
              </div>
              <div className="border-b border-border border-solid mt-4 pb-4">
                <span className="font-light">FROM</span>
                <div>
                  <span className="text-3xl font-bold">
                    $
                    {viewProduct.costAfter}
                  </span>
                  <span className="font-light ml-2">per platform</span>
                </div>
              </div>
              <div className="border-b border-border border-solid">
                <span className="font-light mt-4 block mb-2">
                  PLATFORMS AVAILABLE
                </span>
                <div className="flex my-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">iOS app for Apple (iPhones)</span>
                </div>
                <div className="flex my-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">iOS app for Apple (iPhones)</span>
                </div>
                <div className="flex my-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">iOS app for Apple (iPhones)</span>
                </div>
              </div>
              <div className="border-b border-border border-solid pb-4">
                <div className="flex justify-between font-light my-4">
                  <h2>
                    {viewProduct.builders[0].name}
                  </h2>
                  <span className="mr-6">Included for 12 months</span>
                </div>
                <div className="flex ">
                  <img src="https://studio.builder.ai/assets/images/careinclude.svg" className="mr-6" alt="careinclude" />
                  <p>
                    {viewProduct.builders[0].title}
                    {' '}
                    <span>Learn more</span>
                  </p>
                </div>
              </div>
              <div className="mt-4 mb-8 border-b border-border border-solid pb-4">
                <div className="flex justify-between font-light ">
                  <h2>
                    {viewProduct.builders[1].name}
                  </h2>
                  <span className="mr-6">
                    Available from $
                    {' '}
                    {viewProduct.builders[1].rentCost}
                    {' '}
                    /month
                  </span>
                </div>
                <div className="flex">
                  <img src="https://studio.builder.ai/assets/images/cloudinclude.svg" className="mr-6" alt="careinclude" />
                  <p className="">
                    {viewProduct.builders[1].title}
                    {' '}
                    <span href="#">Learn more</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-end border-t border-border border-solid">
          <button type="button" className="h-16 w-[200px] bg-backgroundAddTemplate">Add template</button>
        </div>
      </div>
    </div>
  );
}
ViewDetailPage.propTypes = {
  productID: PropTypes.array,
  onClose: PropTypes.func,
};

export default ViewDetailPage;
