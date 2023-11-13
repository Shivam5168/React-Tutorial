import React, { useState } from "react";

const UpperCase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [year, setYear] = useState("");
  const [formData, setFormData] = useState([]);

  const onButtonClick = (event) => {
    event.preventDefault();

    const newData = { name, email, contact, year };

    setFormData([...formData, newData]);

    console.log("Form Data:", formData);

    setName("");
    setEmail("");
    setContact("");
    setYear("");
  };

  const onEdit = (index) => {
    console.log(index.value)
     
  } 

  return (
    <div>
      <form onSubmit={onButtonClick}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-control"
          id="name"
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="form-control"
          id="email"
          placeholder="Email"
        />
        <input
          type="number"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          className="form-control"
          id="contact"
          placeholder="Contact"
        />
        <input
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          className="form-control"
          id="year"
          placeholder="Year"
        />
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>

      {formData.length > 0 && (
        <div>
          <h2>Submitted Data</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.contact}</td>
                  <td>{data.year}</td>
                  <td><div type="button" onClick={() => onEdit(index)}><button>Edit</button><button>delete</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UpperCase;
