import React, { useEffect, useState } from 'react';
import { Input } from '@material-ui/core';
import api from '../../services/api';

import useStyles from './Home.styles';
import GameItem from '../../components/GameItem/GameItem';

const Home = () => {
  const [gameData, setGameData] = useState([]);
  const classes = useStyles();

  useEffect( () => {
    api.get('/games').then( response => {
      setGameData(response.data);
    });
  }, []);

  return(
    <div>
      <nav className={classes.navbar} >
        <Input 
          className={classes.inputSearch} 
          placeholder="Faça sua pesquisa" 
          type="text"/>
      </nav>
      <ul>
        {gameData.map(( game ) =>  
          <GameItem key={game._id} data={game} />
        )}
      </ul>
    </div>
  );
};

export default Home;
