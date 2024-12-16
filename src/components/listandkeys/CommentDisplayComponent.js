
const CommentDisplayComponent = ({ comments, handleDelete }) => {

    return (
        <>
            {
                comments.map((comment) => (
                    <div key={comment.id}>
                        <h3>{comment.commentUsername}</h3>
                        <button onClick={() => handleDelete(comment.id)}>Delete</button>
                    </div>
                ))


            }
        </>
    );
}

export default CommentDisplayComponent;