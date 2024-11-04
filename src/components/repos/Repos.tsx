import RepoItem from './RepoItem';

// TODO: Define the types for the props
const Repos = ({ repos }: any) => {
  return repos.map((repo: any) => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
