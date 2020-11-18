import React from 'react';

const Loading = () => {
  return (
    <div style={loadingStyle}>
      <i className='fas fa-circle-notch fa-spin text-5xl text-black'></i>
    </div>
  );
};

export default Loading;

const loadingStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 99,
};
