import React, { useEffect, useState } from 'react';
import { Input } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import api from '../../services/api';

import useStyles from './Home.styles';

import GameItem from '../../components/GameItem/GameItem';
// import PageList from '../../components/PagesList';

const Home = () => {
  const [gameData, setGameData] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const classes = useStyles();

  useEffect( () => {
    loadGames({});
    loadPages();
  }, []);

  const loadPages = () => {
    api.get('/games/total').then( response => {
      setPages(response.data.result/10);
    });
  };

  const loadGames = (options) => {
    const { page = 1 } = options;
    api.get(`/games?page=${page}`).then( response => {
      setGameData(response.data);
      setCurrentPage(page);
    });
  }

  const handleChangePagination = (event, value) => {
    loadGames({ page: value});
  };

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
      <div className={classes.containerFooter}>
        {/* <div className={classes.footer}> */}
        <Pagination 
          count={Math.ceil(pages)}  
          page={currentPage} 
          onChange={handleChangePagination}
        />
          {/* <PageList pages={Math.ceil(pages)} goToPage={loadGames} currentPage={currentPage}/> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
