import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ setAlert, searchUsers, showClear, clearUsers }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    // If form is empty then show alert
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      // Passing this to App.js
      searchUsers(text);
      // Clearing form
      setText("");
    }
  };

  const onChange = e => {
    // this.setState({ text: e.target.value });
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users..'
          value={text}
          onChange={onChange}
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
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
