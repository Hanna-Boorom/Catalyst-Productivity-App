import { useState, useEffect } from "react";

function UserGreeting() {
  const localName = localStorage.getItem("name") || "";
  const [name, setName] = useState(localName);
  const [inputState, setInputState] = useState(false);
  const locale = "en";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);

    if (localName) {
      localStorage.setItem("name", name);
      setInputState(true);
    }
    clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    setInputState(!inputState);
  };

  const hour = today.getHours();

  const greeting = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  const clearName = () => {
    setName("");
    localStorage.removeItem("name");
    setInputState(false);
  };
  return (
    <div className="user-greeting-form">
      {inputState ? (
        <h2>
          {greeting} <span onClick={clearName}>{name}</span>! Make today great!
        </h2>
      ) : (
        <h2>Hi there! What's your name?</h2>
      )}

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
