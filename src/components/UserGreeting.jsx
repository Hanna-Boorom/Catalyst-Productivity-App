import { useState, useEffect } from "react";

function UserGreeting() {
  // const localName = localStorage.getItem("name");
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Howdy! What's' your name?");
  const [inputState, setInputState] = useState(false);

  // useEffect(() => {
  //   const name = localStorage.getItem("name");
  //   if (name) {
  //     setName(name);
  //   }
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGreeting(`Welcome ${name}! Make today great!`);
    // const { value } = target;

    // localStorage.setItem("name", e.target.value);
    setName("");
    setInputState(!inputState);
  };

  return (
    <div className="user-greeting-form">
      <h2>{greeting}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={`name-input ${inputState ? "hidden" : ""}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default UserGreeting;
