import React, { Component } from 'react';


export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = false;
  }


  render() {
    return (
      <div>
        <div className="header">

          <div className="header-hamburger">
            <div className={this.state.active ? "toggleon" : "toggleoff"}
                 onClick={() => this.setState({ active: !this.state.active })}>

              <div className={this.state.active ? 'toggle__off' : 'toggle__on'}>
                <span/>
                <span/>
                <span/>
              </div>
              <div className=" title">
                <p>Discover</p>
              </div>
            </div>

          </div>

<div className="header-desktop">

          <nav className={ this.state.active ? "sidemenu__on" : " sidemenu__off"} >

            <h2> Wesley<img src="../../Images/arrow-icon.png" alt=""/></h2>

            <ul className="main-menu">
              <li>
                <a> Discover</a>
              </li>

              <ul className="sub-menu">
                <li><a> Watched</a></li>
                <li>
                  <a >Movies </a>
                </li>
                <li>
                  <a>Tv shows</a>
                </li>
              </ul>

              <ul className="sub-menu">

                <li>
                  <a> Saved</a></li>
                <li>
                  <a>Movies </a>
                </li>
                <li>
                  <a >Tv shows</a>
                </li>

              </ul>


            </ul>


          </nav>

        </div>
      </div>
      </div>
    );
  }


}
