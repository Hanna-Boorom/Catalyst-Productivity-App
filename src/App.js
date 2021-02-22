import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithubSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Quote from "./components/Quote";
import UserGreeting from "./components/UserGreeting";
import Weather from "./components/Weather";
import Task from "./components/Task";
import "./App.css";

library.add(fab, faGithubSquare, faLinkedin, faCamera);

function App() {
  const [tasks, setTasks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getToDos = async () => {
      const resp = await axios.get(baseURL, config);
      setTasks(resp.data.records);
      console.log("Welcome to my site! Dev + Design by Hanna Boorom");
    };
    getToDos();
  }, [toggleFetch]);

  return (
    <section className="App">
      <Route exact path="/">
        <main className="home-page">
          <header className="title">
            <h4>Catalyst Productivity</h4>
          </header>
          <Weather setToggleFetch={setToggleFetch} />

          <Clock />

          <UserGreeting />

          <section className="tasks-container">
            <h3>Today's Tasks: </h3>
            {tasks.map((task) => (
              <Task key={task.id} task={task} setToggleFetch={setToggleFetch} />
            ))}
          </section>

          <Link to="/new">
            <h4 className="add-new-task">
              + <br />
            </h4>
          </Link>

          <Quote />
        </main>

        <Footer />
      </Route>

      <Route path="/new">
        <section className="form-page">
          <Nav />
          <section className="accomplish">
            <h1>What would you like to accomplish today?</h1>
          </section>
          <Form setToggleFetch={setToggleFetch} />
        </section>
      </Route>
    </section>
  );
}

export default App;
