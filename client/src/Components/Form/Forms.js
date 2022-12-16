import React, { useState } from "react";
import style from "./Form.module.css";
import axios from "axios";

function Forms({ setFormVis }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      name,
      number,
      email,
      address,
      service,
    };
    axios
      .post("/services", data)
      .then(() => {
        setName("");
        setNumber("");
        setEmail("");
        setAddress("");
        setService("");
        alert("Thank you for contacting us!! We will get nack to you soon.");
        setFormVis(false);
      })
      .catch(() => {
        alert("Error Occured. Please try again.");
      });
  };
  return (
    <div id={style.formContainer}>
      <p id={style.closeBtn} onClick={() => setFormVis(false)}>
        X
      </p>
      <form method="POST" action="/services" onSubmit={formSubmitHandler}>
        <div className={style.inputField}>
          <label>Name</label>
          <br />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="enter your name."
            required
          />
        </div>
        <div className={style.inputField}>
          <label>Phone Number</label>
          <br />
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            type="tel"
            placeholder="enter your number."
            required
          />
        </div>
        <div className={style.inputField}>
          <label>Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="enter your email."
          />
        </div>
        <div className={style.inputField}>
          <label>Address</label>
          <br />
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            type="address"
            placeholder="enter your address."
            required
          />
        </div>
        <div className={style.inputField}>
          <label>Service</label>
          <br />
          <select onChange={(e) => setService(e.target.value)} required>
            <option label="Select" />
            <option
              value="Construction & Renovation Work"
              label="Construction & Renovation Work"
            />
            <option value="Renting Scaffolding" label="Renting Scaffolding" />
          </select>
        </div>
        <button id={style.submitBtn}>Submit</button>
      </form>
    </div>
  );
}

export default Forms;
