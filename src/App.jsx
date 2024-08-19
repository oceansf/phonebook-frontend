import "./App.css";

function App() {
  return (
    <>
      <form action="submit" method="post">
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="input">
          <label htmlFor="name">Phone number</label>
          <input
            type="text"
            id="number"
            typeof="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>
        <button>Submit</button>
      </form>
      <div className="phonebook">
        <h2>Phonebook</h2>
        <div className="phonebook-list">
          <ul>
            <li>test</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
