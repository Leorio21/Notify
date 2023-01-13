import React from "react";
import "./App.css";
import { useNotify } from "./Notify/useNotify";

const App = (): React.ReactElement => {
  const { setNotify, NotifyContainer } = useNotify();

  const handleClick = (): void => {
    setNotify("Testtestestestestestestestestsetestsetestestestestsettestesset");
  };
  return (
    <div className="App">
      <button type="button" onClick={handleClick}>
        test
      </button>
      <NotifyContainer></NotifyContainer>
    </div>
  );
};

export default App;
