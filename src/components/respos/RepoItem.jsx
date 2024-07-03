import { FaEye, FaInfo, FaUtensils, FaStar, FaLink } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    startgazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="text-xl font-semibold mb-2">
          <a href={html_url} target="_blank">
            {" "}
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
        <div className="badge-info badge badge-lg mr-2">
          <FaEye  className="inline mr-1"/> {watchers_count}
        </div>
        <div className="badge-success badge badge-lg mr-2">
          <FaStar  className="inline mr-1"/> {startgazers_count || 0}
        </div>
        <div className="badge-error badge badge-lg mr-2">
          <FaInfo  className="inline mr-1"/> {open_issues}
        </div>
        <div className="badge-warning badge badge-lg mr-2">
          <FaUtensils  className="inline mr-1"/> {forks}
        </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
