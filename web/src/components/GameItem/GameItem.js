import { Typography } from '@material-ui/core';

import useStyles from './GameItem.styles';

const GameItem = ({ data }) => {
  const classes = useStyles();

  return(
    <div className={classes.gameItem} >
      <Typography variant='subtitle1' >{data.title}</Typography>
      <Typography variant='caption' >{data.publishers}</Typography>
    </div>
  );
};

export default GameItem;