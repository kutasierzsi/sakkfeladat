import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sakkgetid = ({ e }) => {
  const [player, setPlayer] = useState(null);
  const playerId = e.params.id;

  useEffect(() => {
    axios.get(`http://localhost:3001/chess/${playerId}`)
      .then(response => {
        setPlayer(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [playerId]);

  return (
    <div className="container">
        <div className="card">
          <img src={player.image_url} alt={player.name} />
          <div className="card-details">
            <h2>{player.name}</h2>
            <p>Születési dátum: {player.birth_date}</p>
            <p>World Championships Won: {player.world_ch_won}</p>
            <a href={player.profile_url} target="_blank">Profil</a>
          </div>
        </div>
    </div>
  );
};

export default Sakkgetid;
