import React, { useState } from "react";

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
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <h1>Contact Manager</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            padding: "8px 15px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>

      <br />

      {/* SEARCH */}
      <input
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />

      <h2>Contacts</h2>

      {/* LIST */}
      {contacts
        .filter((c) =>
          c.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((c, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <p><b>Name:</b> {c.name}</p>
            <p><b>Email:</b> {c.email}</p>

            <button
              onClick={() => deleteContact(index)}
              style={{
                marginTop: "10px",
                padding: "5px 10px",
                background: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;