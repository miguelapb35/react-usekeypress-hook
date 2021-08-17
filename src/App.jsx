import React from "react";
import useKeyPress from "./useKeyPress";

const App = () => {
  const HKeyPressed = useKeyPress("h");

  return (
    <>
      <p>Press "h" key</p>
      {HKeyPressed && "H key is pressed !"}
    </>
  );
};

export default App;
