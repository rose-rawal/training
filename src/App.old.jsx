import React, { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true); // [variable, function for updating value of variable]
  // destructive assignment

  useEffect(
    () => {
      console.log("On loading change", loading);
    },
    // function () {

    // }
    [loading] // dependencies
  );

  return (
    <div>
      {loading && "Loading"}
      {!loading && "Loaded"}
      <br />
      <button
        onClick={(event) => {
          setLoading(!loading);
        }}
      >
        Change Loading
      </button>
    </div>
  );
};
/***\
 *  App -> brower -> render
 */
export default App;
