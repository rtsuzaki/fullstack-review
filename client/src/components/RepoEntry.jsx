import React from 'react';


const RepoEntry = (props) => (
  <div style={{border: "1px solid black", padding:"10px"}}>
    Username: {props.repo.userName},<br></br>
    Repo Name: {props.repo.repoName},<br></br>
    Repo URL: <a href="url">{props.repo.repoUrl}</a>,<br></br>
    Number of Forks: {props.repo.forks}<br></br>
    Size: {props.repo.size}<br></br>

  </div>
)

export default RepoEntry;