import { createContext } from 'react';

interface GithubContext {
  users: any[];
  user: any;
  repos: any[];
  loading: boolean;
  searchUsers: (text: string) => void;
  getUser: (username: string) => void;
  getUserRepos: (username: string) => void;
  clearUsers: () => void;
}

const githubContext = createContext<GithubContext>({
  users: [],
  user: null,
  repos: [],
  loading: false,
  searchUsers: () => {},
  getUser: () => {},
  getUserRepos: () => {},
  clearUsers: () => {},
});

export default githubContext;
