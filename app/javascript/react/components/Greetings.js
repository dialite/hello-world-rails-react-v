import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from "../redux/greetings/greetingSlice";

const Greetings = () => {
  const dispatch = useDispatch();
  const { loading, greeting, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Processing...</p>}
      {error && <p>{error}</p>}
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default Greetings;
