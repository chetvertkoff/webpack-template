import React from "react";

const App: React.FC<{ val:string }> = ({val}) => {
  return <p>Hello {val}</p>;
};

export default App;
