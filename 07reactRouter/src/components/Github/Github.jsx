import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const followers = useLoaderData();
  //  Method 1 to call api using useEffect
  // const [followers, setFollowers] = React.useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //     .then((res) => res.json())
  //     .then((data) => setFollowers(data));
  // }, []);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {followers.followers}
      <img
        src={followers.avatar_url}
        width={300}
        alt='avatar'
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
};
