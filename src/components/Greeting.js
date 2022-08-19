import React from 'react';
import './greetings.css';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetings/greetings';

export default function Greeting() {
  const helloMessage = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  const greeting = () => {
    dispatch(getGreeting());
  };
  return (
    <div className="greeting-ctn">
      <button type="button" className="getThingsBtn" onClick={greeting}>
        Say Hello
      </button>
      <p>
        Hello
        {' '}
        {helloMessage}
      </p>
    </div>
  );
}
