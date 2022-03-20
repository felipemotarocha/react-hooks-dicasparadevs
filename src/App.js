import ThemeContextProvider from "./contexts/theme-context";
import Greeting from "./Greeting";

import Message from "./Message";

const App = () => {
  return (
    <ThemeContextProvider>
      <Message />
      <Greeting />
    </ThemeContextProvider>
  );
};

export default App;
