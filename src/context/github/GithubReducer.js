const GithubReducer = (state, action) => {
  switch (action.type) {
    case "get_users":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "get_user":
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case 'get_repos':
      return {
        ...state,
        repos: action.payload,
        loading: false,
      }
    case "set_loading":
      return {
        ...state,
        loading: true,
      };
    case "clear_users":
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default GithubReducer;
