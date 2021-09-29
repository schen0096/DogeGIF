import { useState } from "react"
import CommentDisplay from "./CommentDisplay"
import NewCommentForm from "./NewCommentForm"

function CommentsList({ comments, user, appOnDeleteComment, appOnAddComment, appOnEditComment, otherUser, dogGifs }) {
	const [listComments, setListComments] = useState(comments)

	function onAddComment(data) {
		appOnAddComment(data)
		setListComments([data, ...listComments])
	}

	const onDeleteComment = (data) => {
		let filteredComments = listComments.filter(comment => comment.id !== data)
		setListComments(filteredComments)
		appOnDeleteComment(data)
	}

	const renderComments = listComments.map((comment) => (
    <CommentDisplay comment={comment} key={comment.id} dogGifs={dogGifs} user={user} onDeleteComment={onDeleteComment} appOnEditComment={appOnEditComment} />
  ));	

	return (
		<div>
			{user.id === otherUser.id ?
			( <div className='p-container' >
        	<div className='form-div' >
            <NewCommentForm
              user={user}
              onAddComment={onAddComment}
            />
          	</div>
        </div>
			) : (
				null
			)}
			{renderComments}
		</div>
	)
}

export default CommentsList