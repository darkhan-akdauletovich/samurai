import React from 'react';
import s from './Post.module.css';
import props from '../../Profile';

const Post = (prop) => {
  console.log(prop);
  return (
    <div className={s.post}>
        <img className={s.img} src='https://cutewallpaper.org/21/luffy-profile-picture/Monkey-D-Luffy-YouTube.jpg'/>
        {prop.message}
        <div>
          <span>like</span> {prop.likeCount} 
        </div>
    </div>
  )
}

export default Post