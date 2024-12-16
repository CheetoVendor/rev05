import CommentDisplayComponent from "./CommentDisplayComponent";
import { useState, useEffect } from 'react'

const ListandKeysComponent = () => {
    const [comments, setComments] = useState([
        { "id": 1, commentUsername: "Tom", text: "Dis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee hee" },
        { "id": 2, commentUsername: "Jerry", text: "STOP POSTING DRAMA ON SOCIAL MEDIA!" },
        { "id": 3, commentUsername: "Ren", text: "PRAYERS *sadface*" },
        { "id": 4, commentUsername: "Stimpy", text: "fake Sympathy" }]
    )
    const handleDelete = (id) => {
        const newComment = comments.filter(comment => comment.id != id);
        setComments(newComment)
    }
    useEffect(() => {
        console.log("use effect called")
    })
    return (
        <>
            <h1>List and Keys</h1>
            <CommentDisplayComponent comments={comments} handleDelete={handleDelete}></CommentDisplayComponent>
        </>
    )
}

export default ListandKeysComponent;