import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Sakkdelete = ({ match }) => {
  const [player, setPlayer] = useState(null);
  const playerId = match.params.id;
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3001/chess/${playerId}`)
      .then(response => {
        setPlayer(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [playerId]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/chess/${playerId}`)
      .then(response => {
        console.log('Sikeresen törölve:', response.data);
        history.push('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      {player && (
        <div>
          <h2>Bejegyzés törlése</h2>
          <button onClick={handleDelete}>Törlés</button>
        </div>
      )}
    </div>
  );
};

export default Sakkdelete;
