import React, { Component } from 'react';


export default class Form extends Component {

  constructor(props) {
    super(props);
    this.state = false;
    this.handleHamburger = this.handleHamburger.bind(this);
  }

  handleHamburger() {
    const { active } = this.state;
    this.setState({
      active: !active
    });
  }

  render() {
    const { active } = this.state;
    return [
      (
        <header key="header" className="header">
          <div className={`header__hamburger header__hamburger--${active ? 'on' : 'off'}`}>
            <div
              className={active ? "toggleon" : "toggleoff"}
              role="button"
              tabIndex="0"
              onClick={this.handleHamburger}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  this.handleHamburger(event)
                }
              }}
            >

              <div className={`toggle toggle--${active ? 'on' : 'off'}`}>
                <span />
                <span />
                <span />
              </div>

            </div>

          </div>

          <div className="title">
            <p>Discover</p>
          </div>
        </header>
      ),
      (
        <nav key="navigation" className={`sidemenu sidemenu--${active ? "on" : "off"}`}>
          <h2>
            Wesley
            <img src="../../Images/arrow-icon.png" alt="" />
          </h2>

          <ul className="main-menu">
            <li>
              <a href="#123"> Discover</a>
            </li>

            <ul className="sub-menu">
              <li><a href="#123"> Watched</a></li>
              <li>
                <a href="#123">Movies </a>
              </li>
              <li>
                <a href="#123">Tv shows</a>
              </li>
            </ul>

            <ul className="sub-menu">
              <li>
                <a href="#123"> Saved</a>
              </li>
              <li>
                <a href="#123">Movies </a>
              </li>
              <li>
                <a href="#123">Tv shows</a>
              </li>
            </ul>
          </ul>
        </nav>
      )
    ];
  }
}
