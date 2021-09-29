import { useState } from 'react'

function EditForm({ comment, updateComment, setEditClicked, appOnEditComment }) {
  const [content, setContent] = useState(comment.comment);

  function handleEditContent(e) {
    e.preventDefault();
    setContent(e.target.value);
  }

  function submitEdit(e) {
    e.preventDefault();
    fetch(`/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
				updateComment(data)
        appOnEditComment(data)
				setEditClicked((prevState) => !prevState)
			});
  }

  return (
    <>
      <form onSubmit={submitEdit}>
        <label>
          Edit your comment:
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleEditContent}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default EditForm;