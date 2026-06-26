import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddWebtoon() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    description: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post(
      "/webtoons",
      formData
    );

    navigate("/webtoons");
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        <button className='submit-btn'>
          Add Webtoon
        </button>
      </form>
    </div>
  );
}

export default AddWebtoon;