import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Quote from "./components/Quote";
import UserGreeting from "./components/UserGreeting";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getToDos = async () => {
      const resp = await axios.get(baseURL, config);
      // console.log(resp.data.records);
      setTasks(resp.data.records);
    };
    getToDos();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Route exact path="/">
        <div className="home-page">
          <div className="title">
            <h4>Catalyst Productivity</h4>
          </div>
          <Clock />

          <UserGreeting />

          <div className="tasks-container">
            <h3>Today's Tasks: </h3>
            {tasks.map((task) => (
              <Task key={task.id} task={task} setToggleFetch={setToggleFetch} />
            ))}
          </div>

          <Link to="/new">
            <h4 className="add-new-task">+</h4>
          </Link>

          <Quote />
          <Footer />
        </div>
      </Route>

      <Route path="/new">
        <div className="form-page">
          <Nav />
          <h1>What would you like to accomplish today?</h1>
          <Form setToggleFetch={setToggleFetch} />
        </div>
      </Route>
    </div>
  );
}

export default App;
