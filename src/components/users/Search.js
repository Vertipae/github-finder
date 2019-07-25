import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  // useContext hook
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    // If form is empty then show alert
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
    } else {
      // Passing this to App.js
      githubContext.searchUsers(text);
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
      {/* If length is greater than zero then show the clear button */}
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          // Jäätelökesä this.props
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
