/* 

Não esta sendo usado porque o Material UI resolve isso mais façilmente.
Porém estou deixando aqui a lógica.

*/

import React from 'react';

const PageList = ({ pages, goToPage, currentPage }) => {
  let buttonsNumber = [];

  // configuração de quantos devem aparecer antes e depois da página corrente.
  const lenghtButtons = 4;

  // Cálculo para saber quantas pages devem apareces antes e depois.
  const diffPreviewsPages = currentPage > (pages - lenghtButtons) ? ((currentPage + lenghtButtons) - pages ) : 0;
  const diffNextPages = currentPage < lenghtButtons ? (lenghtButtons - currentPage) : 0;

  const previewsPages =  currentPage > lenghtButtons ? (currentPage - (lenghtButtons + diffPreviewsPages)) : 1;
  const nextPages =  currentPage < (pages - lenghtButtons) ? (currentPage + lenghtButtons + diffNextPages) : pages;

  for(let i=previewsPages; i<=nextPages; i++) {
    buttonsNumber.push(<button key={i} onClick={ () => goToPage({ page: i })} >{i}</button>);
  }

  return(
    <>
      <button>{`<<`}</button>
      <button>{`<`}</button>
      {buttonsNumber.map( button => {
        return button;
      })}
      <button>{`>`}</button>
      <button>{`>>`}</button>
    </>
  )
};

export default PageList;