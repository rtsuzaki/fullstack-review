import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <h5>There are {props.repos.length} repos.</h5>
    {props.displayedRepos.map((repo,index)=> <RepoEntry key={index} repo={repo}/>)}
  </div>
)

export default RepoList;