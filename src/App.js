import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  let [index, setIndex] = useState(0);

  const next = (indexCounter, arrayRef) => {
    return (indexCounter + 1) % arrayRef.length;
  };
  const prev = (indexCounter, arrayRef) => {
    return (indexCounter - 1 + arrayRef.length) % arrayRef.length;
  };

  // Auto play
  useEffect(() => {
    // change slide every five seconds
    let autoplay = setInterval(() => {
      setIndex(next(index, people));
    }, 5000);

    // cleanup, remove interval
    return () => clearInterval(autoplay);
  }, [index, people]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {/* iterate over data */}
        {people.map((person, personIndex) => {
          /* destructure info from person */
          const { id, image, name, title, quote } = person;
          /* TODO add more */

          // manage carousel slides by applying classes
          //
          let position = personIndex === index ? 'activeSlide' : 'nextSlide';
          // set previous slide (or last slide if first is current) as prev
          if (personIndex === prev(index, people)) {
            position = 'lastSlide';
          }
          return (
            // use key when iterating
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={() => setIndex(prev(index, people))}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(next(index, people))}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
