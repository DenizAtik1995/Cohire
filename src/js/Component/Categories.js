import React, { Component } from 'react';


class Categories extends Component {

  constructor() {
    super();
    this.state = { checked: false }
  }

  render() {
    const accordions = document.getElementsByClassName("category");

    for (let i = 0; i < accordions.length; i++) {
      accordions[i].onclick = function () {
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
          <h3>Movies</h3>

          <button className="category">Select Genre (s)</button>
          <div className="category-content">

            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Action </label>

            </div>
            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Adventure </label>

            </div>

            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Animation </label>

            </div>

            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Comedy </label>

            </div>

            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Crime film </label>

            </div>

            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Documentary </label>

            </div>

            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Drama </label>

            </div>
            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Erotic </label>

            </div>
            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Family </label>

            </div>
            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Family </label>

            </div>
            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Fantasy </label>

            </div>
            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> History </label>

            </div>

            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Horror </label>

            </div>


          </div>

          <button className="category">Select min.vote</button>
          <div className="category-content">
            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> 7.2 </label>

            </div>
            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> 8.3 </label>

            </div>

            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> 9.5 </label>

            </div>

          </div>


          <button className="category">Select language</button>
          <div className="category-content">


            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> English </label>

            </div>
            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Greek </label>

            </div>

            <div className="checkbox-container">

              <input type="checkbox" className="mybox" onChange={this.handleCheck}
                     defaultChecked={this.state.checked}/> <label htmlFor="mybox"> Turkish </label>

            </div>



        </div>
        </div>
      </div>
    );
  }
}

export default Categories;




