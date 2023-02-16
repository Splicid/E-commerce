import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./form.css"

const SignUpPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [body, setBody] = useState("");
  const [data, setData] = useState({})

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/poster', {
      title: title
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

    // console.log("Title: ", title);
    // console.log("Price: ", price);
    // console.log("Body: ", body);
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="price"
          id="price"
          name="price"
          value={price}
          onChange={event => setPrice(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body:</label>
        <textarea
          type="body"
          id="body"
          name="body"
          rows="10"
          cols="40"
          value={body}
          onChange={event => setBody(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="type"> Filename </label>
        <input type="file" id="myFile" name="filename" />
      </div>
      <button type="submit"> Submit </button>
    </form>
  );
};

export default SignUpPage;
