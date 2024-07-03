import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const {setAlert} = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert('Please enter something', 'error')
    } else {
      //todo
      searchUsers(text);

      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mb-8 gap-8">
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            className="pr-40 w-full bg-gray-200 input input-lg text-black"
            placeholder="Search"
            value={text}
            onChange={handleChange}
          />
          <button className="btn absolute right-0 btn-lg top-0 w-36 rounded-l-none">
            Go
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <button onClick={clearUsers} className="btn btn-lg btn-ghost">Clear</button>
      )}
    </div>
  );
};

export default UserSearch;
