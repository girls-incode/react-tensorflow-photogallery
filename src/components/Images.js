import React, { useEffect, useRef, useState } from 'react';

const Images = ({ showImg }) => {
  // const [timing, setTiming] = useState(0);
  const [count, setCount] = useState(0);
  let timing = useRef(0);

  const handleImg = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('2 mounted...');

    timing.current = setInterval(() => {
      setCount(count + 1);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log('3 updated...');
  }, [count]);

  useEffect(() => () => {
    console.log('4 unMounted...');
    if (showImg === false) clearInterval(timing.current);
  });

  return (
    <div>
      <div>
        {console.log('1 render...')}
        {count}
      </div>
      <img
        className='rounded-lg md:w-56'
        src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80'
        width='448'
        height='299'
        alt=''
        onClick={handleImg}
      />
    </div>
  );
};

export default Images;
