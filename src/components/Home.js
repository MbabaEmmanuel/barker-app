import { useEffect, useState } from 'react';
import api from '../api/api';
import Post from './Post';
import Pagination from './Pagination';

function Home () {
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState('');
    const [info, setInfo] = useState([]);

    async function fetchAllBarks() {
        try {
            const response = await api.getAllBarks();
            setPosts(response.data.barks);
            console.log(response);
            console.log(posts);
            
            const infoRes = await api.getInfo();
            setInfo(infoRes);
            console.log(JSON.stringify(infoRes.data));
        } catch(err) {
            setError('The following error has occurred ' + err);
            console.log(error);
        }
    }

    useEffect(
        () => {
            fetchAllBarks();
        }, []
    )
    
    if(posts === null) {
        return "Loading...";
    }

    return (
        <>
            {posts.length > 0 ? (
                <>
                    <Pagination
                      data={posts}
                      RenderComponent={Post}
                      title="Barks"
                      pageLimit={5}
                      dataLimit={10}
                    />
                 </>
            ) : (
                <h1>No Posts to display</h1>
            )}
        </>
    );
}

export default Home;