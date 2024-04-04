import React, { useState } from 'react';
import axios from 'axios';

const Sakkpost = () => {
  const [formData, setFormData] = useState({
    name: '',
    birth_date: '',
    world_ch_won: '',
    profile_url: '',
    image_url: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3001/chess', formData)
      .then(response => {
        console.log('Új bejegyzés:', response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h2>Új bejegyzés hozzáadása</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Név:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Születési dátum:</label>
          <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>World Championships Won:</label>
          <input type="number" name="world_ch_won" value={formData.world_ch_won} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Profil URL:</label>
          <input type="url" name="profile_url" value={formData.profile_url} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Kép URL:</label>
          <input type="url" name="image_url" value={formData.image_url} onChange={handleChange} required />
        </div>
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
};

export default Sakkpost;
