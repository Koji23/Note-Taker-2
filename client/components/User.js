import React from 'react';
import ReactDOM from 'react-dom';
import {Nav} from './Navs';
import {Link} from 'react-router';

//define a mixin-like function to house user submit functionality
let UserFormMixin =  InnerComponent => class extends React.Component {
  constructor () {
    super();
    
  }
  submitUser (event) {
    event.preventDefault();
    let loginData = {
      username: ReactDOM.findDOMNode(this.refs.username).value,
      password: ReactDOM.findDOMNode(this.refs.password).value      
    }
    console.log(loginData);
  }
  render() {
    return  <InnerComponent {...this.state} {...this.props} />
  }
}

//define a "login" inner-component. include a link to signup
class Login extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Nav />
        <form>
          <fieldset>
            <legend>Login</legend>
            Username:<br/>
            <input ref="username" onChange={this.props.updateSignup} type="text" /><br/>
            Password:<br/>
            <input ref="password" onChange={this.props.updateSignup} type="password" name="password"/><br/><br/>
            <input onClick={(event) => this.submitUser(event)} type="submit" value="Submit" />
          </fieldset>
        </form>
        <Link to="signup" activeStyle={{color:'green'}}>Signup</Link>
        {this.props.children}
      </div>
    );
  }
}

//define a "signup" inner-component
class Signup extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <form>
        <fieldset>
          <legend>Signup</legend>
          Username:<br/>
          <input ref="username" onChange={this.props.updateSignup} type="text" /><br/>
          Password:<br/>
          <input ref="password" onChange={this.props.updateSignup} type="password" name="password"/><br/><br/>
          <input onClick={(event) => this.submitUser(event)} type="submit" value="Submit" />
        </fieldset>
      </form>
    );
  }
}

//create two new "higher-order components" using the mixin-like function
let LoginForm = UserFormMixin(Login);
let SignupForm = UserFormMixin(Signup);



export  {LoginForm, SignupForm};



