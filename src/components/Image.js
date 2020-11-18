import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import useTFClassify from './../utils/hooks/useTFClassify';
import './image.css';

const Image = ({ index, img, removeImg, show }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { predict, predictions, setPredictions, loading } = useTFClassify();
  const imgRef = useRef();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseOver={() => setIsHovered(true)}
      className='relative'
    >
      <img
        ref={imgRef}
        src={img}
        alt=''
        className='m-auto h-48'
        onClick={show}
        crossOrigin='anonymous'
      />
      {(predictions.length > 0 || loading) && (
        <span
          onClick={() => setPredictions([])}
          className='prediction bg-gray-800 rounded-lg shadow'
        >
          {loading && <p>Loading ⏳...</p>}
          {predictions.map((pred, i) => (
            <div className='flex justify-between text-sm' key={i}>
              <p>{pred.className}</p>
              <p>{Math.floor(pred.probability * 100)} %</p>
            </div>
          ))}
        </span>
      )}
      <i
        onClick={() => removeImg(index)}
        className={`fas fa-times absolute right-0 top-0 mt-2 mr-2 ${
          isHovered ? '' : 'hidden'
        } cursor-pointer text-xl`}
      />
      <i
        onClick={() => predict(imgRef.current)}
        className={`fas fa-search absolute left-0 top-0 mt-2 ml-2 ${
          isHovered ? '' : 'hidden'
        } cursor-pointer text-xl`}
      />
    </div>
  );
};

Image.propTypes = {
  removeImg: PropTypes.func,
  show: PropTypes.func,
  img: PropTypes.string,
  index: PropTypes.number,
};

export default Image;
