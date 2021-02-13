import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <se className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {/* iterate over data */}
        {people.map((person, index) => {
          {
            /* destructure info from person */
          }
          const { id, image, name, title, quote } = person;
          {
            /* TODO add more */
          }

          {
            /* always need a key when iterating over objects/arrays */
          }
          return (
            <article key={id}>
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default App;