import React, { useRef, useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import Image from './Image';
import Loading from './Loading';
import useFetchImage from './../utils/hooks/useFetchImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebounce from './../utils/hooks/useDebounce';

const Images = () => {
  const [newPicture, setNewPictures] = useState('');
  const [page, setPage] = useState(1);
  const [searchPhoto, setSearchPhoto] = useState('cat');
  const [pictures, setPictures, errors, isLoading] = useFetchImage(
    page,
    searchPhoto
  );
  const [preview, setPreview] = useState(false);
  const debounce = useDebounce();
  // const [scrollPos, setScrollPos] = useState(0);
  const inputRef = useRef(null);
  const loadMoreRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll);
  //   return () => document.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (scrollPos >= document.body.scrollHeight - window.innerHeight) {
  //     setPage(page + 1);
  //   }
  // }, [scrollPos]);

  // function handleScroll() {
  //   setScrollPos(window.scrollY);
  // }

  // useEffect(() => {
  //   if (isLoading === false) inputRef.current.focus();
  //   console.log(document.getElementById('path') === inputRef.current);
  // }, [isLoading]);

  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect');
  // });

  const removeImg = (index) => {
    setPictures(pictures.filter((img, i) => i !== index));
    // setPictures([...pictures.slice(0, index), ...pictures.slice(index + 1)]);
  };

  const handleImg = (ev) => {
    setNewPictures(ev.target.value);
  };

  const addImg = () => {
    if (newPicture !== '') {
      setPictures([...pictures, newPicture]);
      setNewPictures('');
    }
  };

  const handleSearch = (ev) => {
    // setSearchPhoto(ev.target.value);
    setPage(1);
    debounce(() => setSearchPhoto(ev.target.value));
  };

  return (
    <>
      {errors.length > 0 && <div className='m-auto'>{errors}</div>}
      {errors.length === 0 && (
        <>
          <div className='my-5'>
            <input
              type='text'
              onChange={handleSearch}
              className='w-1/2 p-2 border border-gray-300 shadow rounded'
              placeholder='search photo'
            />
          </div>
          {/* <div className='flex m-2'>
            <input
              id='path'
              ref={inputRef}
              type='text'
              value={newPicture}
              onChange={handleImg}
              className='flex-grow mr-2 p-2 border border-gray-300 shadow rounded'
            />
            <button
              onClick={addImg}
              className={` ${
                newPicture !== '' ? 'bg-indigo-900' : 'bg-blue-300'
              } py-2 px-4 text-white rounded`}
              disabled={newPicture === ''}
            >
              Add img
            </button>
          </div> */}
          <div style={{ position: 'relative' }}>
            {isLoading === true && <Loading />}
            <AnimateSharedLayout>
              <InfiniteScroll
                dataLength={pictures.length}
                next={() => setPage(page + 1)}
                hasMore={true}
                loader={<Loading />}
                className='grid grid-cols-4 gap-3 imgs'
              >
                {/* <div className='grid grid-cols-4 gap-3 imgs'> */}
                {pictures.map((img, i) => (
                  <motion.div
                    key={i}
                    layoutId={img.urls.regular}
                    className='p-1 relative border border-solid border-gray-300'
                  >
                    <Image
                      index={i}
                      img={img.urls.thumb}
                      removeImg={removeImg}
                      show={() => setPreview(img.urls.regular)}
                    />
                  </motion.div>
                ))}
                {/* </div> */}
              </InfiniteScroll>
              <AnimatePresence>
                {preview && (
                  <motion.div
                    layoutId={preview}
                    exit={{ opacity: 0 }}
                    onClick={() => setPreview(false)}
                    className='fixed w-full h-full top-0 left-0 flex justify-center items-center z-40'
                  >
                    <img
                      src={preview}
                      alt=''
                      width='300'
                      height='auto'
                      className='rounded-lg'
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimateSharedLayout>
          </div>
          {/* <button
            ref={loadMoreRef}
            onClick={() => {
              setPage(page + 1);
              loadMoreRef.current.focus();
            }}
            className='py-2 px-4 text-white rounded bg-blue-600'
          >
            Load more
          </button> */}
        </>
      )}
    </>
  );
};

export default Images;
