import { useState } from "react";
import "./App.css";
import WebHomepage from "./pages/user/WebHomepage";
import Header from "./components/user/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <WebHomepage />
    </>
  );
}

export default App;
