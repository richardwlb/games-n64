import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aliceblue',
    height: '60px',
  },
  inputSearch: {
    width: '50%',
  },
  // footer: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   width: '90%',
  // },
  containerFooter: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default useStyles;