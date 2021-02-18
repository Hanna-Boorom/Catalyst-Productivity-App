import { useState, useEffect } from "react";

function UserGreeting() {
  const localName = localStorage.getItem("name") || "";
  const [name, setName] = useState(localName);
  const [greeting, setGreeting] = useState("Howdy! What's your name?");
  const [inputState, setInputState] = useState(false);

  useEffect(() => {
    if (localName) {
      localStorage.setItem("name", name);
      setGreeting(`Welcome ${name}! Make today great!`);
      setInputState(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    setGreeting(`Welcome ${name}! Make today great!`);
    setInputState(!inputState);
  };

  const clearName = () => {
    setName("");
    localStorage.removeItem("name");
    setInputState(false);
  };
  return (
    <div className="user-greeting-form">
      {inputState ? (
        <h2>
          Welcome <span onClick={clearName}>{name}</span>! Make today great!
        </h2>
      ) : (
        <h2>Howdy, what's your name?</h2>
      )}

      <form onSubmit={handleSubmit}>
        <input
          className={`name-input ${inputState ? "hidden" : ""}`}
          type="text"
          value={name}
          // value={name || ""}**I TRIED THIS AND IT GOT RID OF THE UNDEFINED ERROR, BUT STILL DOESN'T STORE
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default UserGreeting;
