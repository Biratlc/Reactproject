import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import './Component/nav-bar.js';
import './Component/nav-bar.css';
import NavBarComponent from './Component/nav-bar';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loginSuccess: false,
      name: ""
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(event){
    event.preventDefault();

    const username = event.target.elements.username.value;
    this.setState({
      loginSuccess: true,
      name: username
    })

    console.log('login requested.');
  }
  render() {

    const loginSuccess = this.state.loginSuccess;
    const username = this.state.name;
    return (

        <div className="App">
          <div>
            <NavBarComponent/>
          </div>
          <header className="App-header">

            <img src="https://yt3.ggpht.com/a-/AAuE7mDYBceplJU7wUzgll96Y2mi6ERMdLxbHzLVbQ=s900-mo-c-c0xffffffff-rj-k-no" className="App-logo" alt="logo" />

            My Name Is Ghassan Alkadi.<h1>G DOC</h1>
            <form onSubmit={this.handleLogin}>
              <input type="text" name="username" placeholder="Enter username..."/><br />
              <input type="password" name="password" placeholder="Enter password..." /><br />

              <input type="submit" value="Login" />
            </form>

            {loginSuccess  && (
                <p> Congrats, {username}, you are a Ghassan fan now!</p>
            )}
          </header>
        </div>
    )
  }
}

export default App;
//export default NavBarComponent;