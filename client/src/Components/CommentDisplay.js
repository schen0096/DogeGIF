import { useState } from 'react'
import EditForm from './EditForm'
import { Button } from 'semantic-ui-react'

function CommentDisplay({ comment, user, onDeleteComment, appOnEditComment, dogID }) {
	const [editClicked, setEditClicked] = useState(false)
	const [errors, setErrors] = useState([])
	const [renderComment, setRenderComment] = useState(comment)

	function handleDelete(e) {
    onDeleteComment(comment.id)
    e.preventDefault()
		fetch(`/comments/${comment.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) setErrors(data.errors);
      });
	}

	function editButtonClick() {
		setEditClicked(!editClicked)
	}
	
	function updateComment(data) {
		setRenderComment(data)
	}

  const msec = Date.parse(renderComment.created_at)
  const parseDate = new Date(msec).toDateString()
  const splitDate = parseDate.split(" ")
  const renderDate = `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`

	return (
    <div className='post-div' >
      <main style={{ marginLeft: 80 }} >
        {/* <div>
          <b>{renderComment.all.user.username}</b>
          renderComment.dog_gif_id === dogGifs.id &&
        </div> */}
        { renderComment.dog_gif_id === dogID ? 
                (<>
                  <p>{renderComment.comment}</p>
                  <div>
                    
                    <em>{renderDate}</em>
                  </div>
                </>
                ) : (
                  null
                )
      }
      </main>
    <div className='p-container' >
        {renderComment && renderComment.user_id === user.id && renderComment.dog_gif_id === dogID ?  (
          <>
            <Button basic color='blue' style={{'marginLeft': 70}}onClick={editButtonClick}>Edit</Button>
            <Button basic color='red' onClick={handleDelete}>Delete</Button>
            {errors ? errors.map((e) => <div>{e}</div>) : null}
            {editClicked ? (
              <EditForm
                comment={renderComment}
                updateComment={updateComment}
                setEditClicked={setEditClicked}
                appOnEditComment={appOnEditComment}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default CommentDisplay