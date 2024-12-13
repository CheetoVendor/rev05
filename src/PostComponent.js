import { useState } from "react";
import CommentComponent from "./CommentComponent";

const PostComponent = (props) => {
    const postUsername = "Gerald Goo";
    const postContent = "Blah blah blah, cheetos are good. I'm tired and need sleep. *insert random drama thats no one elses business* *insert lack of accountability* send prayers please *insert sad emoji*";

    const [commentText, setText] = useState("")
    const [comments, setComments] = useState([
        { id: 1, commentUsername: "Tom", text: "Dis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee heeDis funny hee hee" },
        { id: 2, commentUsername: "Jerry", text: "STOP POSTING DRAMA ON SOCIAL MEDIA!" },
        { id: 3, commentUsername: "Ren", text: "PRAYERS *sadface*" },
        { id: 4, commentUsername: "Stimpy", text: "fake Sympathy" }]
    )

    const postComment = () => {
        setComments([...comments, { id: comments.length + 1, commentUsername: "Branden", text: commentText }])
        setText("");
    }
    const updateText = (e) => {
        setText(e.target.value);
    }

    return (
        <div style={{ display: "inline-block", border: "1px solid black", width: "500px", padding: "20px", backgroundColor: "gainsboro" }}>
            <img src="https://preview.redd.it/hvnfnmdje2v01.png?auto=webp&s=d83f9430448d6d9e0d5ed58195caed98d6bf7b23" style={{ width: "32px" }}></img>
            <b>{postUsername}</b>
            <br />
            <hr />
            <b>{postContent}</b>
            <hr />

            <CommentComponent comments={comments}></CommentComponent>


            <b>Comment: </b>
            <input type="text" value={commentText} onChange={updateText}></input>
            <button onClick={postComment}>Submit</button>

        </div>
    )
}
export default PostComponent;