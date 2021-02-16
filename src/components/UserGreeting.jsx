import { useState } from "react";

function UserGreeting() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Howdy! What is your name?");
  const [inputState, setInputState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGreeting(`Welcome ${name}! Make today great!`);
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
