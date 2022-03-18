import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default App;
