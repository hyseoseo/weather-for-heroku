import React, { useState } from "react";

const Greeting = () => {
  const userName = localStorage.getItem("username");
  const [user, setUser] = useState(userName);

  const handleInputChange = (event) => {
    localStorage.setItem("username", event.target.value);
    setUser(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="What is your name?"
        onChange={handleInputChange}
      />
      <h1>Hello, {user ? user : "Stranger"}</h1>
    </div>
  );
};

export default Greeting;
