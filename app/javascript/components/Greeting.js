import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreetingsThunk } from "../redux/slices/greetingsSlice";

const Greeting = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingsThunk());
  }, []);

  const greetings = useSelector((state) => state.greetings.greetings);
  const { greeting } = greetings;

  return (
    <div>
      <h2>Greetings</h2>
      <span>{greeting}</span>
    </div>
  );
};

export default Greeting;
