import React from "react";
import PropTypes from 'prop-types';

// purgatorial code
import { connect } from "react-redux";
import { registerUser } from "../actions/index";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// css
import "../CSS/Register.css";
import "../CSS/Loader_01.css";

class Register extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: null
  };

  static propTypes = {
    error: PropTypes.any,
    history: PropTypes.object,
    isFetching: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    location: PropTypes.object,
    match: PropTypes.object,
    notes: PropTypes.arrayOf(PropTypes.object),
    token: PropTypes.any,
    updateNote: PropTypes.func,
    updated: PropTypes.bool,
    user: PropTypes.object
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = e => {
    this.props.registerUser({
      username: this.state.username.trim(),
      email: this.state.email.trim(),
      password: this.state.password.trim()
    });
  };

  render() {
    console.log(`is regsitering: ${this.props.isRegistering}`);
    return (
      <div className="register-form">
        <h1 className="register-header">Register</h1>
        <form type="submit">
          <div className="form-ctrl">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              required
              name="username"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-ctrl">
            <label htmlFor="email">Email Address: </label>
            <input
              type="email"
              required
              name="email"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-ctrl">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              onChange={this.handleOnChange}
            />
          </div>
          <div className="form-ctrl">
            {this.props.isRegistering ? (
              <div className="line-container">
                <div className="line" />
              </div>
            ) : (
              <button
                disabled={this.props.isRegistering}
                onClick={this.handleRegister}
                type="submit"
                className="btn link"
              >
                Register
              </button>
            )}
          </div>
        </form>
        <Link
          to="/login"
          className="my-3"
          href=""
          onClick={this.handleIsMember}
        >
          Already a Member?
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    token: state.token,
    isLoggedIn: state.isLoggedIn,
    error: state.error,
    isRegistering: state.isRegistering
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { registerUser }
  )(Register)
);
