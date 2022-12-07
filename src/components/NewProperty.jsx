import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./new-property.css";

const NewProperty = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    image: "",
    description: "",
    location: "",
    price: "",
  });
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/properties", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        window.alert("Data inserted successfully");
        navigate("/");
      } else {
        window.alert("Something went wrong");
        r.json().then((err) => console.log(err.errors));
      }
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setformData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className="content">
      <div className="list-left">
        <h1>
          We make it easy for{" "}
          <span className="tenants">tenants and landlords</span>
        </h1>
        <p>List your Rental. Increase Tenancy. Get Rich.</p>
      </div>
      <div className="auth-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="image">Image</label>
          <input
            onChange={handleChange}
            type="text"
            name="image"
            placeholder="Enter image url"
            id="image"
            value={formData.image}
          />
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Brief description"
            id="description"
            value={formData.description}
          />
          <label htmlFor="location">Location</label>
          <input
            onChange={handleChange}
            value={formData.location}
            type="location"
            name="location"
            placeholder="Location of the property"
            id="location"
          />
          <label htmlFor="price">Price</label>
          <input
            onChange={handleChange}
            value={formData.price}
            type="number"
            name="price"
            placeholder="Price"
            id="price"
          />
          <button>List property</button>
        </form>
      </div>
    </div>
  );
};

export default NewProperty;
