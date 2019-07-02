import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    // If form is empty then show alert
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      // Passing this to App.js
      this.props.searchUsers(this.state.text);
      // Clearing form
      this.setState({ text: "" });
    }
  };

  onChange = e => {
    // this.setState({ text: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users..'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {/* Calling functionality clearUsers prop up from App.js */}
        {/* If showClear is true then show clear button */}
        {showClear && (
          <button
            className='btn btn-light btn-block'
            // Jäätelökesä this.props
            onClick={clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
