import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

const URL = process.env.REACT_APP_GITHUB_URL;
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const inintialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, inintialState);

  //search users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: "get_users",
      payload: items,
    });
  };

  //get single user
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${URL}/users/${login}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "get_user",
        payload: data,
      });
    }
  };

  //get user respos
  const getRepos = async (login) => {
    setLoading();
    const response = await fetch(`${URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({
      type: "get_repos",
      payload: data,
    });
  };

  //clear state
  const clearUsers = () => dispatch({ type: "clear_users" });

  const setLoading = () => dispatch({ type: "set_loading" });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,

        //function
        searchUsers,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
