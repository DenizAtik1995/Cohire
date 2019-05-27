import React from 'react';
import PropTypes from 'prop-types';
import '../polyfill/Array.from';

const Categories = props => {
  const { genres } = props;
  const accordions = Array.from(document.getElementsByClassName("category"));

  accordions.forEach(accordion => {
    accordion.onclick = () => {
      accordion.classList.toggle('is-open');

      const content = accordion.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  });

  const genreComponents = genres ? genres.map(({id, name}) => (
    <div key={id} className="checkbox-container">
      <input type="checkbox" id={name} className="mybox" />
      <label htmlFor={name}>{name}</label>
    </div>
  )) : '';

  return (
    <div className="category-main">
      <div className="container">
        <h3>Movies</h3>

        <button className="category">Select Genre (s)</button>
        <div className="category-content">

          {genreComponents}

        </div>

        <button type="" className="category">Select min.vote</button>

        <div className="category-content">
          <div className="checkbox-container">

            <input type="checkbox" className="mybox" id="7_2" />
            <label htmlFor="7_2"> 7.2 </label>

          </div>
          <div className="checkbox-container">

            <input type="checkbox" className="mybox" id="8_3" />
            <label htmlFor="8_3"> 8.3 </label>

          </div>

          <div className="checkbox-container">

            <input type="checkbox" className="mybox" id="9_5" />
            <label htmlFor="9_5"> 9.5 </label>

          </div>

        </div>


        <button className="category">Select language</button>

        <div className="category-content">


          <div className="checkbox-container">

            <input type="checkbox" id="English" className="mybox" />
            <label htmlFor="English"> English </label>

          </div>
          <div className="checkbox-container">

            <input type="checkbox" id="Greek" className="mybox" />
            <label htmlFor="Greek"> Greek </label>

          </div>

          <div className="checkbox-container">

            <input type="checkbox" id="Turkish" className="mybox" />
            <label htmlFor="Turkish"> Turkish </label>

          </div>



        </div>
      </div>
    </div>
  );
};

export default Categories;

Categories.propTypes = {
  genres: PropTypes.array
};
