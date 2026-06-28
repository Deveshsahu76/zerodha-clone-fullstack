import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://zerodha-clone-backend-po9t.onrender.com/signup",
        user
      );

      alert(res.data.message);

      // Signup successful hone ke baad Dashboard par redirect
      window.location.href =
        "https://zerodha-clone-dashboard-dszd.onrender.com/";

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Signup Failed"
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          className="form-control mb-3"
          value={user.fullname}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;