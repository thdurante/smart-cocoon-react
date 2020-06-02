import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchData } from '../actions/fake_fetch';

const SampleComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return (
    <>
      <p>Hello</p>
    </>
  );
};

export default SampleComponent;
