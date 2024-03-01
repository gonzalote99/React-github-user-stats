import React from 'react';

export default function Stats({user}: any) {
  return(
    <div className='stats'>
    <div>
    <h1>{user.followers}</h1>
      <h3>followers</h3>
    </div>
      <div>
      <h1>{user.following}</h1>
        <h3>following</h3>
      </div>
      <div>
      <h1>{user.public_gists}</h1>
        <h3>gists</h3>
      </div>
      <div>
      <h1>{user.public_repos}</h1>
        <h3>repos</h3>
      </div>
      <div>
      <h1>{user.total_starts}</h1>
        <h3>starts</h3>
      </div>
      <div>
      <h1>{user.total_forks}</h1>
        <h3>forks</h3>
      </div>
    </div>
  )
}