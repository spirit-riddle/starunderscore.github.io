import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebase";

const WaitingListForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    if (!email || !email.includes("@")) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (!name.trim()) {
      setStatus("Please enter your name.");
      return;
    }

    try {
      const waitingListRef = collection(firestore, "pro/waitingList/entries");
      await addDoc(waitingListRef, {
        email,
        name,
        timestamp: new Date(),
      });
      setStatus(`Thank you, ${name}! You’ve been added to the Pro waiting list.`);
      setSubmitted(true); // Mark as submitted to hide the form
    } catch (error) {
      console.error("Error adding to waiting list:", error);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : null}
      {status && <p>{status}</p>}
    </div>
  );
};

export default WaitingListForm;
