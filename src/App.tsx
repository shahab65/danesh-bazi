import React from "react";
import "./App.css";
import ReactQuery from "./ReactQuery";
import Routes from "./pages/Routes";

function App() {
  return (
    <div>
      <ReactQuery>
        <Routes />
      </ReactQuery>
    </div>
  );
}

export default App;
