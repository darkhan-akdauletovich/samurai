import React from 'react';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log(props);
  return (
      <div>
          <ProfileInfo />
          <Myposts posts={props.state.posts} />
      </div>
  );
}

export default Profile