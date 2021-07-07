import { useState, useEffect } from 'react';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function Post(props) {
    const { owner, likes, createdAt, content, bark_id } = props.data;
    const [ like, setLike ] = useState(likes);
    
    let history = useHistory();
    
    function updateLike() {
        setLike(like + 1);
        console.log(like);
    }

    function barkRedirect() {
        history.push("/bark/" + bark_id);
    }

    return (
        <div className="post">
            <small>{likes}</small>
            <h1>{createdAt}</h1>
            <p>{content}</p>
            <div>
                <p>
                    <FontAwesomeIcon 
                      id="likeIcon" 
                      icon={faThumbsUp} 
                      onClick={updateLike}
                    />
                    <span> : {like} </span>
                </p>
                <Button variant="Primary" onClick={barkRedirect}>Bark Link</Button>{''}
            </div>
        </div>
    );
}

export default Post;