import React, { Fragment } from 'react';

function Home() {
  let saludo = 'Hola que tal';
  return (
    <Fragment>
      <h3> Home Component </h3>
      <p> lorem ipsum dolor sit am </p>
      <p> { saludo } </p>
      <p> { 2 * 3 } </p>
    </Fragment>
  );
}

export default Home;
