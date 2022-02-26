import React from "react";
import * as Loader from "react-loader-spinner";

const App = () => {
  return (
    <div className="center">
      <Loader.Rings
        type="Puff"
        color="black"
        height={200}
        width={200}
      />
    </div>
  )
}

export default App;