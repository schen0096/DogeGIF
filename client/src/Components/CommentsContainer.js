import { Fragment } from "react"
import CommentsList from "./CommentsList"

function CommentsContainer({ user, comments, appOnDeleteComment, appOnAddComment, appOnEditComment, dogGifs }) {

  return (
    <Fragment>
      { comments.length > 0 ? (
      <div>
        <CommentsList comments={comments} user={user} appOnDeleteComment={appOnDeleteComment} appOnAddComment={appOnAddComment} appOnEditComment={appOnEditComment} otherUser={user} dogGifs={dogGifs}/>
      </div>
      ) : (<h1>Loading...</h1>)}
    </Fragment>
  );
}

export default CommentsContainer;