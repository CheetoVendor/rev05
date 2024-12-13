const CommentComponent = (props) => {
    return (
        <div style={{ border: "1px solid black", borderRadius: "2%", overflowY: "auto", maxHeight: 200 }}>
            <ul>
                {props.comments.map((comment =>
                    <li key={comment.id} style={{ listStyle: "none" }}>
                        <div style={{ textAlign: "left" }}>
                            <b>{comment.commentUsername}: </b>

                            {comment.text}
                        </div>

                        <hr />

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CommentComponent;