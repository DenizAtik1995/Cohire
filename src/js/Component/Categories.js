
import React, { Component } from 'react';



class Categories extends Component {
  render() {
    const accordions = document.getElementsByClassName("category");

    for (let i = 0; i < accordions.length; i++) {
      accordions[i].onclick = function() {
        this.classList.toggle('is-open');

        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    }

    return (


    <div className="category-main">
        <div className="container">
          <h3>movies</h3>

          <button className="category">Select Genre</button>
          <div className="category-content">
            <li> hoerj</li>
          </div>


          <button className="category">Select min.vote</button>
          <div className="category-content">
            <li> jdfjdjf </li>

          </div>


          <button className="category">Select language</button>
          <div className="category-content">
    <li>jfjdfja</li>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;




