import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingApi } from '../redux/greetings/greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetingsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingApi());
  }, [dispatch]);

  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <p>{greeting}</p>
      <button type="button" onClick={refreshPage}>Get another greeting</button>
    </div>
  );
};

export default Greeting;
