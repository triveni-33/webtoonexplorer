import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function EditWebtoon() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    description: ""
  });

  useEffect(() => {
    getWebtoon();
  }, []);

  async function getWebtoon() {
    const response = await api.get(
      `/webtoons/${id}`
    );

    setFormData(response.data);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await api.put(
      `/webtoons/${id}`,
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
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button className='submit-btn'>
          Update Webtoon
        </button>
      </form>
    </div>
  );
}

export default EditWebtoon;