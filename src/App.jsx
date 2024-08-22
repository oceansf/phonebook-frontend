import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // TODO: fetch data from mongodb using axios
    axios.get("http://localhost:3001/api/persons").then((response) => {
      setPeople(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people, { name, number }]);
    axios.post("http://localhost:3001/api/persons", {
      name,
      number,
    });
    setName("");
    setNumber("");
  };

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:3001/api/person/${e.target.id}`)
      .then((response) => {
        setPeople(
          people.filter((p) => {
            people.indexOf(p) !== e.target.id;
          })
        );
      });
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
                  id={person._id}
                  onClick={handleDelete}
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
