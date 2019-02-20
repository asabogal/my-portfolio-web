export const portfolio = {
  base: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridAutoRows: 'auto',
    gridGap: '.5em',
    paddingLeft: '1em',
    paddingRight: '1.5em',
    '@media (max-width: 1050px)': {
      gridTemplateColumns: '50% 50%'
    },
    '@media (max-width: 700px)': {
      gridTemplateColumns: '100%',
      gridGap: '2em',
    }
  }
};


export const card = {
  base: {
    padding: '1em',
    borderRadius: '.1em',
    boxShadow: '.125em .125em .3125em rgba(0, 0, 0, 0.5)',
    textDecoration: 'none',
    transform: 'scale(.95)',
    transition: 'all .2s ease-in-out',
    cursor: 'pointer',
    '@media (min-width: 700px)': {
      ':hover': {
        transform: 'scale(1.0)',
        boxShadow: '.125em .125em .625em rgba(0, 0, 0, 0.5)',
      }
    },
    '@media (max-width: 700px)': {
      transform: 'scale(1)'
    }
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  image: {
    borderRadius: '.2em'
  }
};