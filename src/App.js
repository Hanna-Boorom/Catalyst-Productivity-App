import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import Clock from "./components/Clock";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Quote from "./components/Quote";
import UserGreeting from "./components/UserGreeting";
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
          <Nav />
        </div>
        <Clock />
        <UserGreeting />
        <Quote />
      </Route>

      <Route path="/new">
        <h1>What would you like to accomplish today?</h1>
        <Form />
      </Route>
    </div>
  );
}

export default App;
