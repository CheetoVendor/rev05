import { useState, useEffect } from "react";
import axios from "axios";
import DisplayPost from "./DisplayPost";

const AxiosGetDemo = () => {

    const [posts, setPost] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
            .then(res => {
                setPost(res.data)
            })
    }, [])
    return (
        <>
            <h2>Axios Demo</h2>
            {
                <DisplayPost posts={posts} />
            }
        </>
    );
}

export default AxiosGetDemo;