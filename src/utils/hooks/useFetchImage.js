// import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const url = process.env.REACT_APP_UNSPLASH_URL;
const key = process.env.REACT_APP_UNSPLASH_KEY;

function useFetchImage(page, searchPhoto) {
  const [pictures, setPictures] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetch() {
    const path =
      searchPhoto === null ? 'photos?' : `search/photos?query=${searchPhoto}&`;
    axios
      .get(`${url}/${path}client_id=${key}&page=${page}`)
      .then((res) => {
        setIsLoading(false);
        setErrors([]);
        searchPhoto === null ? loadRandom(res) : loadSearch(res);
      })
      .catch((er) => {
        setIsLoading(false);
        setErrors('loading issue: ', er.response.data);
      });
  }

  function loadSearch(res) {
    page > 1
      ? setPictures([...pictures, ...res.data.results])
      : setPictures([...res.data.results]);
  }

  function loadRandom(res) {
    setPictures([...pictures, ...res.data]);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch();
    // eslint-disable-next-line
  }, [page, searchPhoto]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch();
  // }, [page]);

  // useEffect(() => {
  //   if (searchPhoto === null) return;
  //   setIsLoading(true);
  //   fetch();
  // }, [searchPhoto]);

  return [pictures, setPictures, errors, isLoading];
}

export default useFetchImage;
