import { useState } from "react";

function UserGreeting() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Good morrow! What is your name?");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGreeting(`Welcome ${name}! Make today great!`);
  };

  return (
    <div className="user-greeting-form">
      <h2>{greeting}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          id="username"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default UserGreeting;
