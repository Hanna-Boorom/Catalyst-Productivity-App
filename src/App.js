import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import "./App.css";

function App() {
  useEffect(() => {
    const getToDos = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data);
    };
    getToDos();
  }, []);

  return (
    <div className="App">
      <h2>Heyyyy!</h2>
      <h3>How Ya'll Dooinnn?</h3>
    </div>
  );
}

export default App;
