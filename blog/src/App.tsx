import { useContext } from "react";
import { RootRouter } from "./navigation/RootRouter";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Provider store={store}>
      <div
        className="App"
        style={{
          background: theme.backgroundColor,
        }}
      >
        <RootRouter />
      </div>
    </Provider>
  );
}

export default App;
