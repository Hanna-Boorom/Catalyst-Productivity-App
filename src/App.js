import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import Clock from "./components/Clock";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getToDos = async () => {
      const resp = await axios.get(baseURL, config);
      // console.log(resp.data.records);
      setTasks(resp.data.records);
    };
    getToDos();
  }, []);

  return (
    <div className="App">
      <Route exact path="/">
        <div className="home-page">
          <h1>This will be the Home Page! </h1>
          <Clock />
        </div>
      </Route>

      <Route path="/new">
        <h1>Form to Add new task</h1>
      </Route>
    </div>
  );
}

export default App;
