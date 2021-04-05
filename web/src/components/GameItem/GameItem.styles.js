import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  gameItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '30px',
    margin: '10px',
    backgroundColor: 'white',
    padding: '5px',
    borderRadius: '5px',
    '&:hover': {
      cursor: 'pointer',
    }
  },
});

export default useStyles;