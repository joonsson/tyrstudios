import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Home",
    };
  }

  handleClick(location) {
    this.setState({ location: location });
  }

  renderMenuBtn(location) {
    return (
      <MenuBtn
        value={location}
        onClick={() => this.handleClick(location)}
      />
    );
  }

  renderPage() {
    switch (this.state.location) {
      case "Home":
        return (
          <HomePage 
          contactClick={() => this.handleClick("Contact")} />
        );
      case "Examples":
        return (
          <ExamplesPage
          contactClick={() => this.handleClick("Contact")}  />
        );
      case "Contact":
        return (
          <ContactPage
          contactClick={() => this.handleClick("Contact")}  />
        );
      case "About":
        return (
          <AboutPage
          contactClick={() => this.handleClick("Contact")}  />
        );
      default:
        break;
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tyr Studios</h1>
          <div className="Menu">
            {this.renderMenuBtn("Home")}
            {this.renderMenuBtn("Contact")}
            {this.renderMenuBtn("About")}
          </div>
        </header>
        <div className="Container">
        <div className="PageContainer">
          {this.renderPage()}
          <div class="push"></div>
        </div>
        <footer className="footer">
          <img src={logo} className="React-logo" alt="logo" />
        </footer>
        </div>
      </div>
    );
  }
}

function HomePage(props) {
  return (
    <div className="Page">
      <h3 className="App-intro">
        Developing for you!
      </h3>
      <p>
        Need something developed? Look no further, Tyr Studios is here for you. <a onClick={props.contactClick}>Contact us</a> explaining what you need along with an optional price offer and we will get back to you as soon as we can.
      </p>
      <p>
        Languages and techniques we've got competence in:
        <ul>
          <li>Javascript</li>
          <li>Java</li>
          <li>SQL</li>
          <li>Web development</li>
          <li>IBM Campaign</li>
          <li>IBM Watson Campaign Automation</li>
          <li>React</li>
          <li>C#</li>
        </ul>
      </p>
    </div>
  );
}

function ExamplesPage(props) {
  return (
    <div className="Page">
      <h3 className="App-intro">
        Examples
      </h3>
    </div>
  );
}


function ContactPage(props) {
  return (
    <div className="Page">
      <h3 className="App-intro">
        Contact us
      </h3>
      <p>
        Contact us via <a href="mailto:tyrstudios@gmail.com">email</a> with your project or any questions you may have.
      </p>
    </div>
  );
}


function AboutPage(props) {
  return (
    <div className="Page">
      <h3 className="App-intro">
        About us
      </h3>
      <p>
        Tyr Studios is a hobby project I've started to try and get some exciting and interesting side projects. During the day I'm a fulltime developer at the worlds biggest travel agency. Because of this I can't take on projects that are too big or have a short deadline. My long term goal is to grow this hobby project into a proper business. Trust that we will do our best to make you happy with our work. If you have any questions feel free to <a onClick={props.contactClick}>contact us.</a>
      </p>
    </div>
  );
}



function MenuBtn(props) {
  return (
    <button id={props.value} value={props.value} className="MenuBtn" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


export default App;
