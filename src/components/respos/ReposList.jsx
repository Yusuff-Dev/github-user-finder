import RepoItem from "./RepoItem";

const ReposList = ({repos}) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl card-title font-bold">Lates Repositories</h2>
        {repos.map(repo=>{
          return <RepoItem key={repo.id} repo={repo}/>
        })}
      </div>
    </div>
  );
};

export default ReposList;
