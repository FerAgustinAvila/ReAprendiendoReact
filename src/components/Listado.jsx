import React, { Fragment, useState } from 'react';

const Listado = () => {

    const [ numero, setNumero ] = useState([1,2,3,4,5,6])

  return (
    <Fragment>
      <h3> Listado Component </h3>
      <ul>
        {
              numero.map( (item, i) =>
                  <li key={i}>
                    { item } - { i }
                  </li>
              )
        }
      </ul>
    </Fragment>
  );
}

export default Listado;