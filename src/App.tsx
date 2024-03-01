import React, {useState} from 'react';
import useGithubStatus from 'react-github-user-stats';
import Navbar from './components/Navbar';
import Avatar from './components/Avatar';
import Stats from './components/Stats';
import DataViewer from './components/DataViewer';
import './App.css'
 
const App = () => {
  const [username, setUsername] = useState("gonzalote99");
  const {error, loading, userData} = useGithubStatus(username);

  if(loading) return <h1>loading...</h1>;
  if(error) return <h1>error: {error}</h1>;
  if(!userData) return <h1>not found</h1>;

  return(
    <div className='container'>
       <Navbar onChange={(input: any) => setUsername(input)} value={username} />
      <div className='info-card'>
      <Avatar user={userData} />
        <h1>
        <a className='name' href={userData.url || '#'}>
          {userData.name}
        </a>
        </h1>
        <h2 className='username'>@{userData.username}</h2>
        <Stats user={userData} />
        <p>bio: {userData.bio || '--'}</p>
        <p>
        <span>🏠</span> {userData.location || '--'}
        </p>
        <p>
        <span>🚀</span> {userData.website || '--'}
        </p>
        <p>
        <span>🌍</span> {userData.company || '--'}
        </p>
        <p>
        <span>🐤</span> twitter @{userData.twitter_username || '--'}
        </p>
        <p className='createdAt'>
        github account created <span>{userData.created_at}</span>
        </p>
      </div>
      <DataViewer data={userData} />
    </div>
  );
};

export default App;