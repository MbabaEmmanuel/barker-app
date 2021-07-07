import react, { useState, useEffect } from "react"
import api from "../api/api"
import Post from "./Post"
import { useRouteMatch } from "react-router-dom"

function Bark () {
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const urlMatch = useRouteMatch("/bark/:barkId");
    console.log(urlMatch);
    const barkId = urlMatch.params.barkId;

    async function fetchBark() {
        try {
            const response = await api.getBark(barkId);
            setPost(response.data.barks[0]);
        } catch (err) {
            setError("The following error has occured. " + err);
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(
        () => {
            fetchBark();
        }, []
    );

    if(loading) {
        return "Loading...";
    }

    return (
        <>
            { post != null ? (
                <Post data={post}/>
            ) : (
                <h1>No Posts available</h1>
            )
            }
        </>
    );
}

export default Bark;