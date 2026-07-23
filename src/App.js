import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Please fill all fields");
      return;
    }

    const newContact = { name, email };
    setContacts([...contacts, newContact]);

    setName("");
    setEmail("");
  }

  function deleteContact(index) {
    const updated = contacts.filter((_, i) => i !== index);
    setContacts(updated);
  }

  return (
   <div className="container">
      <h1>Contact Manager</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

       <button type="submit" className="add-btn">
  Add
</button>
      </form>

      <br />

      {/* SEARCH */}
      <input
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-field"
      />

      <h2>Contacts</h2>

      {/* LIST */}
      {contacts
        .filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((c, index) => (
          <div key={index} className="contact-card">
            <p><b>Name:</b> {c.name}</p>
            <p><b>Email:</b> {c.email}</p>

           <button
  onClick={() => deleteContact(index)}
  className="delete-btn"
>
  Delete
</button>
          </div>
        ))}
    </div>
  );
}

export default App;