import { useLayoutEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default App;
