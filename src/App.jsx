import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // TODO: fetch data from mongodb using axios
    const personsInDB = axios
      .get("http://localhost:3001/api/persons")
      .then((response) => {
        setPeople(response.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people, { name, number }]);
    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="name">Phone number</label>
          <input
            type="text"
            id="number"
            typeof="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="phonebook">
        <h2>Phonebook</h2>
        <div className="phonebook-list">
          <ul>
            {people.map((person, index) => (
              <li key={index}>
                {person.name} {person.number}{" "}
                <button
                  className="delete-btn"
                  onClick={() => {
                    setPeople(people.filter((p) => p.name !== person.name));
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
