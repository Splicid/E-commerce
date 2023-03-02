import React, { useEffect, useState } from "react";
import axios from 'axios'
import "./form.css"

const SignUpPage = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [body, setBody] = useState("");
  const [data, setData] = useState({})
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    let formData = new FormData()
    formData.append("selectedFile", selectedFile)
    axios.post('http://localhost:3000/poster', formData, {
      headers: {"Content-Type": "multipart/form-data"},
      title: title,
      rice: price,
      body: body
    })
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
        <input type="file" name="filename" onChange={event => setSelectedFile(event.target.files[0])} />
      </div>
      <button type="submit"> Submit </button>
    </form>
  );
};

export default SignUpPage;
