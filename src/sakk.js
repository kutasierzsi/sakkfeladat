import React from "react";

const Sakk = ({ player }) => {
    return (
      <div className="card">
        <img src={player.image_url} alt={player.name} />
        <div className="card-details">
          <h2>{player.name}</h2>
          <p>Születési idő: {player.birth_date}</p>
          <p>World Championships Won: {player.world_ch_won}</p>
          <a href={player.profile_url} target="_blank">Profil</a>
        </div>
      </div>
    );
  };

export default Sakk