import { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import GithubContext from '../../context/github/GithubContext'

const UserResult = () => {
  const {users, loading} = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default UserResult;
