import React, { Component } from 'react';
import viking from './viking.jpg';
import logo from './logo.svg';
import background from './background-web.jpg';
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

  renderLogo(location) {
    return (
      <Logo
        value={location}
        onClick={() => this.handleClick(location)}
        img = {viking}
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
      <img src={background} alt="bg" class="bg" />
        <header className="App-header">
        <div className="Head">
        {this.renderLogo("Home")}
          <h1 className="App-title">Tyr Studios</h1>
          </div>
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
          <li>Data Management</li>
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
        Contact us via <a href="mailto:tyrstudio@gmail.com">email</a> with your project or any questions you may have.
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
        Tyr Studios is a hobby project I've started to try and get some exciting and interesting side projects. During the day I'm a fulltime developer/data manager at the worlds biggest travel company. Because of this I can't take on projects that are too big or have a short deadline. My long term goal is to grow this hobby project into a proper business. Trust that we will do our best to make you happy with our work. If you have any questions feel free to <a onClick={props.contactClick}>contact us.</a>
      </p>
    </div>
  );
}



function MenuBtn(props) {
  return (
    <a id={props.value} value={props.value} className="button btnFade btnPurple" onClick={props.onClick}>
      {props.value}
    </a>
  );
}

function Logo(props) {
  return (
    <a id={props.value} value={props.value} onClick={props.onClick}>
      <img src={props.img} className="Viking-logo" alt="logo" />
    </a>
  );
}

export default App;
