import Main from "./main";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("App.js useEffect");
    const script = document.createElement("script");
    script.src = "/js/main.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
