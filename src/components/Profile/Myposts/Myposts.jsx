import React from 'react';
import Post from './Post/Post';
import s from './Myposts.module.css';



const Myposts = (props) => {
    console.log(props);
    let postElements = props.posts.map( prop => <Post message={prop.message} likeCount={prop.likeCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default Myposts;